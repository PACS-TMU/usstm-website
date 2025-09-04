#!/usr/bin/env node
// migrate-past-boards.mjs
// Simple migration script to upload public/data/about/past-boards/past-boards.json
// into Supabase `content_items` under category slug 'about' with slug 'past-boards'.

import fs from 'fs/promises'
import path from 'path'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tcxedbncvbgzgsbnfltw.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjeGVkYm5jdmJnemdzYm5mbHR3Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1Njg0NTExOCwiZXhwIjoyMDcyNDIxMTE4fQ.Uxc86RzdRvbcAr8XV3QqcL2mtGZtbcbhRsGflmn7-Us';

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase credentials. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or SUPABASE_SERVICE_KEY).')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

const dataPath = path.join(process.cwd(), 'public', 'data', 'about', 'past-boards', 'past-boards.json')

async function loadJson(p) {
  const raw = await fs.readFile(p, 'utf8')
  return JSON.parse(raw)
}

async function ensureCategory(slug = 'about') {
  // Try select existing
  const { data, error } = await supabase
    .from('content_categories')
    .select('id')
    .eq('slug', slug)
    .limit(1)
    .maybeSingle()

  if (error) throw error
  if (data && data.id) return data.id

  // Insert a new category
  const { data: ins, error: insErr } = await supabase
    .from('content_categories')
    .insert({ name: 'About', slug, description: 'About page content' })
    .select('id')
    .maybeSingle()

  if (insErr) throw insErr
  return ins.id
}

async function upsertContentItem(categoryId, boards) {
  const contentItem = {
    category_id: categoryId,
    title: 'Past Boards',
    slug: 'past-boards',
    content: { boards },
    status: 'published',
    sort_order: 0
  }

  const { data, error } = await supabase
    .from('content_items')
    .upsert(contentItem, { onConflict: 'slug' })
    .select('*')

  if (error) throw error
  return data
}

async function run() {
  console.log('Reading past-boards JSON from', dataPath)
  const boards = await loadJson(dataPath)

  console.log('Ensuring category `about` exists...')
  const categoryId = await ensureCategory('about')
  console.log('Using category id:', categoryId)

  console.log('Upserting content_item with slug `past-boards`...')
  const res = await upsertContentItem(categoryId, boards)
  console.log('Done. Upsert result:', res)
}

run().catch((err) => {
  console.error('Migration failed:', err)
  process.exit(2)
})

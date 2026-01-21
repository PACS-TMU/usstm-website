# Payload Dashboard Setup Guide

## What You Need to Add in Payload CMS Dashboard

After the implementation is complete, you need to populate your Payload CMS with content. Here's a step-by-step guide:

---

## 1. **Site Settings Global** (`/admin/globals/site-settings`)

### Required Fields:

#### **Site Name**
- Value: `USSTM`

#### **Logo**
- Upload the USSTM logo image
- Recommended: PNG/SVG, square aspect ratio (~240x240px)
- URL from original site: `https://tcxedbncvbgzgsbnfltw.supabase.co/storage/v1/object/public/images/icons/usstm-logo.png`

#### **Navigation** (Array - Add items in order)
1. **Home**
   - Label: `Home`
   - Href: `/`

2. **About**
   - Label: `About`
   - Href: `/about`

3. **Events**
   - Label: `Events`
   - Href: `/events`

4. **Contact**
   - Label: `Contact`
   - Href: `/contact`

*(Add more navigation items as needed with submenus)*

#### **Footer Text**
- Value: `© 2024 - Copyright PACS, All Rights Reserved.`

---

## 2. **Homepage Global** (`/admin/globals/homepage`)

### Tab 1: Hero Section

#### **Hero Title**
- Value: `USSTM`

#### **Hero Subtitle**
- Value: `Undergraduate Science Society of Toronto Metropolitan University`

#### **Motto**
- Value: `Quarere Miror - Seek to Wonder`

#### **Hero Background Image** (Optional)
- Upload a parallax background image
- Recommended: High-resolution landscape image

---

### Tab 2: Stats

#### **Students Count**
- Value: `4000` (or your actual number)

#### **Students Icon**
- Upload icon for students stat
- URL from original: `https://tcxedbncvbgzgsbnfltw.supabase.co/storage/v1/object/public/images/homepage/stats-icons/students-icon.png`

#### **Groups Count**
- Value: `25` (or your actual number)

#### **Groups Icon**
- Upload icon for student groups stat
- URL from original: `https://tcxedbncvbgzgsbnfltw.supabase.co/storage/v1/object/public/images/homepage/stats-icons/groups-icon.png`

#### **Board Members Count**
- Value: `25` (or your actual number)

#### **Board Icon**
- Upload icon for board members stat
- URL from original: `https://tcxedbncvbgzgsbnfltw.supabase.co/storage/v1/object/public/images/homepage/stats-icons/board-icon.png`

---

### Tab 3: About Section

#### **About Heading**
- Value: `About Us`

#### **About Description**
```
The Undergraduate Science Society of Toronto Metropolitan (USSTM) stands as the esteemed representative body for students within the Faculty of Science at Toronto Metropolitan University. Emanating from a commitment to academic excellence, community engagement, and student welfare, USSTM embodies the collective aspirations of the undergraduate science community. Governed by elected members of the student body, USSTM orchestrates a spectrum of impactful events, delivers essential services, and facilitates a platform for constructive dialogue. As stewards of transparency and governance, USSTM adheres to a constitution, by-laws, and financial policies that uphold the highest standards of operation. In essence, USSTM is an institutional pillar, fostering a conducive environment for academic growth, community cohesion, and the realization of shared ambitions of science students.
```

---

### Tab 4: Four Pillars

Add exactly **4 pillar items** (in order):

#### **Pillar 1: CONSISTENCY**
- Title: `CONSISTENCY`
- Description: `We maintain a steady approach, ensuring our actions and decisions align with established standards and values consistently.`
- Text Color: `white`

#### **Pillar 2: TRANSPARENCY**
- Title: `TRANSPARENCY`
- Description: `We prioritize open communication, providing accessible information to build trust and understanding among our members.`
- Text Color: `dark`

#### **Pillar 3: SUPPORT**
- Title: `SUPPORT`
- Description: `We offer assistance, encouragement, and resources, fostering an environment where every member feels valued and empowered to succeed.`
- Text Color: `dark`

#### **Pillar 4: UNITY**
- Title: `UNITY`
- Description: `We promote collaboration and teamwork, celebrating diversity and achieving success together through our cohesive community.`
- Text Color: `dark`

---

### Tab 5: Land Acknowledgement

#### **Heading**
- Value: `Land Acknowledgement`

#### **Content** (Rich Text Editor)
```
Toronto Metropolitan University is in the 'Dish With One Spoon Territory'. The Dish With One Spoon is a treaty between the Anishinaabe, Mississaugas and Haudenosaunee that bound them to share the territory and protect the land. Subsequent Indigenous Nations and peoples, Europeans and all newcomers have been invited into this treaty in the spirit of peace, friendship and respect.

The "Dish", or sometimes it is called the "Bowl", represents what is now southern Ontario, from the Great Lakes to Quebec and from Lake Simcoe into the United States. We all eat out of the Dish, all of us that share this territory, with only one spoon. That means we have to share the responsibility of ensuring the dish is never empty, which includes taking care of the land and the creatures we share it with. Importantly, there are no knives at the table, representing that we must keep the peace.
```

---

## 3. **FAQs Collection** (`/admin/collections/faqs`)

Add FAQ entries. Here's the structure for each FAQ:

### Example FAQ 1:
- **Question**: `What is USSTM?`
- **Answer**: `USSTM is the Undergraduate Science Society of Toronto Metropolitan University, representing science students and organizing events and services.`
- **Category**: `General`
- **Order**: `1`
- **Show on Homepage**: ✅ (Check this for the first 8 FAQs)
- **Is Published**: ✅

### Example FAQ 2:
- **Question**: `How can I get involved?`
- **Answer**: `You can get involved by attending our events, joining committees, or running for a board position during elections.`
- **Category**: `General`
- **Order**: `2`
- **Show on Homepage**: ✅
- **Is Published**: ✅

### Tips for FAQs:
- Create 8+ FAQs total
- Mark the first 8 as "Show on Homepage"
- Use categories to organize: `General`, `Events`, `Membership`, `Finance`, etc.
- Use the `order` field to control display sequence

---

## 4. **Media Collection** (`/admin/collections/media`)

### Upload Required Images:

1. **USSTM Logo**
   - Use for Site Settings → Logo
   - Square format, transparent background preferred

2. **Stats Icons** (3 images)
   - Students icon
   - Student groups icon
   - Board members icon
   - Use simple, clean icon designs

3. **Optional: Hero Background**
   - Large landscape image for parallax effect
   - Minimum 1920px wide

---

## Quick Start Checklist

- [ ] Access Payload admin at `http://localhost:3000/admin`
- [ ] Upload logo and icons to Media collection
- [ ] Configure Site Settings global
- [ ] Configure Homepage global (all 5 tabs)
- [ ] Create at least 8 FAQs (mark first 8 for homepage)
- [ ] Save all changes
- [ ] View your homepage at `http://localhost:3000`

---

## Testing Your Content

After adding content:

1. Visit `http://localhost:3000` to see the homepage
2. Visit `http://localhost:3000/faq` to see all FAQs
3. Test mobile menu by resizing browser
4. Hover over pillar cards to see flip animation
5. Scroll to see parallax effect on hero

---

## Notes

- All content is editable through the Payload dashboard
- Changes are reflected immediately (no rebuild needed)
- You can add more navigation items, FAQs, etc. at any time
- Default values are already set, so partial content will still render

---

## Need Help?

If you encounter any issues:
1. Check that all required fields are filled
2. Ensure images are uploaded and selected properly
3. Verify "Is Published" is checked for FAQs
4. Check the order field for proper sequencing

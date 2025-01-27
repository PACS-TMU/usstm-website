# Release Procedure

This repository follows [semantic versioning](https://semver.org). Below are release procedures,
same for all levels (major/minor/patch).

- Create a new branch with a name that follows the pattern `<describe>/<name>`. For example:
  - `patch/update-dependency-x`
  - `feature/implement-functionality-x`
- Make changes on your branch, then open a PR into `dev` when your changes are complete. Changes
  pushed to `dev` go live at `dev.usstm.ca`.
  - It is the responsibility of the development team to ensure that changes do not get overwritten
    by multiple (nearly) simultaneous pushes to `dev`.


## [CI/CD](https://github.com/resources/articles/devops/ci-cd)
*Assume the latest released version is 1.2.3.*

On **Tuesday**s at **5 PM ET**, the following workflow will be invoked automatically:
- Check that `dev` is ahead of `main` (if not then terminate)
- Push a new commit to `dev` with the message "Version 1.2.4" (i.e. patch version incremented by
  one). Push the tag `v1.2.4` for that commit.
- Open a PR from the **tag** to `main`, await manual review.

If a minor/major release is required, this PR should be closed and instead the corresponding
workflow should be invoked manually. These workflows are functionally the same, but increment the
minor/major version numbers respectively (as well as resetting the lower version numbers to 0).

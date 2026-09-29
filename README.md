# Behind Every Good Decision — Section 1 sites

This repository contains two standalone Section 1 learning sites, both ready to publish through GitHub Pages.

| Site | Folder | Published URL |
| --- | --- | --- |
| Light editorial version | `begd-01/` | `https://nhanhoangle.github.io/begd-01/` |
| Dark modern version | `begd-02/` | `https://nhanhoangle.github.io/begd-02/` |

Each folder contains its own home page, chapter pages, and local assets. The two sites can therefore be hosted from the same GitHub repository without interfering with each other.

## Preview locally

From the repository root, run:

```bash
python3 -m http.server --bind 127.0.0.1 4182
```

Then open either of these addresses:

```text
http://127.0.0.1:4182/begd-01/index.html
http://127.0.0.1:4182/begd-02/index.html
```

Use the explicit `index.html` addresses when previewing with a basic local server; this prevents directory-listing pages.

## Deploy both sites with GitHub Pages

1. Create a GitHub repository named `nhanhoangle.github.io`, or push this project to the existing repository with that name.

2. Commit and push the site folders:

   ```bash
   git add begd-01 begd-02 README.md
   git commit -m "Add Section 1 learning sites"
   git push origin main
   ```

3. On GitHub, open the repository and go to **Settings → Pages**.

4. Under **Build and deployment**, select:

   - **Source:** Deploy from a branch
   - **Branch:** `main`
   - **Folder:** `/(root)`

5. Click **Save**. GitHub will publish the site after the Pages deployment completes.

6. Visit:

   - `https://nhanhoangle.github.io/begd-01/`
   - `https://nhanhoangle.github.io/begd-02/`

GitHub Pages treats each folder as a URL path. You only configure Pages once at the repository root; no second repository or second Pages configuration is required.

## Updating a site

After changing either version, publish the update by committing and pushing again:

```bash
git add begd-01 begd-02
git commit -m "Update Section 1 sites"
git push origin main
```

The GitHub Pages URLs stay the same and update when the deployment finishes.

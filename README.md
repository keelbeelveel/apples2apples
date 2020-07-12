*README Modified: Sun July 12, 2020 @ 06:23:14 EDT*
## File Structure:
```
$projectFrontendRoot = /usr/etc/apples2apples/source
$projectBackendRoot = /usr/etc/apples2apples/api
/usr/etc/apples2apples/
  |\__ 📁 (/api)
  |    |\___ 📁 (/nodemodules)
  |    |     \____ 📁 (...)
  |    |\___ 📁(/routes)
  |    |     |\___ 📁 (/api)
  |    |           |\___ 💾 cards.js
  |    |           |\___ 💾 lobbies.js
  |    |           \____ 💾 profiles.js
  |    |\___ 💾 api.js
  |    |\___ 💾 package.lock
  |    \____ 💾 package.json
  |
  \___ 📁 (/source)
       |\__ 📁(/.sh)
       |    |\___ 💾 build.sh
       |    |\___ 💾 flag-available.sh
       |    \____ 💾 flag-unavailable.sh
       \__ 📁 (/pagesource)
           |\___ 📁 (/css)
           |     \____ 💾 main.css
           |\___ 📁 (/html)
           |     \____ 💾 index.html
           \____ 📁 (/js)
                 \____ 💾 index.js
📁 /etc/httpd
  |\___ 📁 (/sites-available)
  |     \___ 💾 a2a.conf # Apache `.conf` file
  \____ 📁 (/sites-enabled)
        \____ 🔗 a2a.lnk -> a2a.conf # Symlink to conf file
```

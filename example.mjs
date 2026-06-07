const uname = 'imob.hunter'

const _res = await fetch('https://www.instagram.com/graphql/query', {
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    pragma: 'no-cache',
    priority: 'u=1, i',
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua':
      '"Chromium";v="148", "Google Chrome";v="148", "Not/A)Brand";v="99"',
    'sec-ch-ua-full-version-list':
      '"Chromium";v="148.0.7778.217", "Google Chrome";v="148.0.7778.217", "Not/A)Brand";v="99.0.0.0"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"19.0.0"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-asbd-id': '359341',
    'x-bloks-version-id':
      '8c6b886e8c8169480f69ddea406ef61a5b9b1e99aa1fb678ce42845892fffdd4',
    'x-csrftoken': 'mAMprXxl9hmTqZGTfAgMXamNOcSgBwXe',
    'x-fb-friendly-name': 'PolarisProfilePostsQuery',
    'x-fb-lsd': 'RLjqjQgotaoJTvjlH6FbQ8',
    'x-ig-app-id': '936619743392459',
    'x-ig-max-touch-points': '0',
    'x-root-field-name': 'xdt_api__v1__feed__user_timeline_graphql_connection',
  },
  referrer: `https://www.instagram.com/${uname}/`,
  body: `av=17841473586092910&__d=www&__user=0&__a=1&__req=7&__hs=20611.HYP%3Ainstagram_web_pkg.2.1...0&dpr=1&__ccg=GOOD&__rev=1040989249&__s=4cldwq%3Arygv4s%3A90swgb&__hsi=7648508978188457926&__dyn=7xeUjG1mxu1syawKBAg5S1Dxu13wvoKewSAwHwNw9G2Saxa0k24o0B-q1ew6ywMwto2awgo9oO0n24oaEnxO1ywOwv89k2C1FwnE6a0D85m263ifK0EUjwGzEaE2iwNwmE2eUlwhEe87q10w51wLyES1TwVwDwHg2ZwrUK2K2WE5B08-269wr86C1mgO2m3zhA6bwg8rAwHxW1oxe6U3UyVrx60hK3KawOwi84q2i1cweW3m9K&__csr=jgkMR7MB6iN9jfZhDkNeQ-ZkJRiuijix8Cln_ii8SiVF2HiqcGFyKfBXZ9tmF6CaLGbGBjJ2kmm8BAUGlGJeayi4lVapqUhQAWFqih4VBaJ4BBGl3F49HaaFbxeVayaKFGmVUS79uFozyXKbgK7Unxt1C7CumaDGqfUixjGuEKVpb8WACKcyF6SFagGhyemFpeiENa-7J4xe3yFUC9y8hUF3Eyi4HAAyE8kfz8hQi0Co05ry06iU0imw0dx2351XK0ewDw1l22AUG0YixC0gV01oO1YAAw43xbAw2CVD404iwhE88d8mQ083wbwE2ND8l2U420rCu5axS0su4-u8gDEUeo0hJo3bwLw0hA80fwE6q0d5o&__hsdp=ggMbp3K1610yH1sFy4NsjGGWDVqkzTnagFgYlfjx5O5K2-pzUgzxgMVrUy4N0O4kawHdwxwpki3912b819x22KcG11JBFwHgpxq94wVx668lwiEcE-1owMxu1XwyAyomzu3C3O1nG3y0wEbUa8gzqwyx6ml3E4W1Rx-3W0ju0G8jwzxy05ro3vwuo0kuweHwnU11Uuw2KEhw4Sw4cwdOew3r82Nwgo7ja6osx-1CwcG1sw9_w&__hblp=08y0wo4Gu1bwPwiE663B2EdU7ubyu1awHyo9E94h29ErCxWuV8ry9A6p9kuA1aDyooxm7o9pEcFEybzomxGcwgpE7DzokHyomzu265Uf8Ci2S6Gx62q688U4fwKga8gx-4UhBBgym1ez86t1m9wVAw9e8K0BE2Exe27K584K1Cwto17o1To1i83vwuo0XDw5ywbu3bwLwLwlo2txe7EkBzEjwdm0qq4o12E9F81382OwFzE0Jm2l0rU98fE4S11wAwjYEogsxKU6q0w84qE5O2m1VU&__sjsp=ggMbp3K1610yGzgjaoxcn4AGKF-mB8ZROAakf5jUq8mUbVCfxYk7E7EM&__comet_req=7&fb_dtsg=NAfwytikrWLr-300NTlq4GQ9IS1hNYPI7r6uFMhvYKbbtpCOhSD1kTw%3A17843696212148243%3A1780805822&jazoest=26250&lsd=RLjqjQgotaoJTvjlH6FbQ8&__spin_r=1040989249&__spin_b=trunk&__spin_t=1780807268&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisProfilePostsQuery&server_timestamps=true&variables=%7B%22data%22%3A%7B%22count%22%3A12%2C%22include_reel_media_seen_timestamp%22%3Atrue%2C%22include_relationship_info%22%3Atrue%2C%22latest_besties_reel_media%22%3Atrue%2C%22latest_reel_media%22%3Atrue%7D%2C%22username%22%3A%22${uname}%22%2C%22__relay_internal__pv__PolarisImmersiveFeedChainingEnabledrelayprovider%22%3Atrue%2C%22__relay_internal__pv__PolarisAIGMMediaWebLabelEnabledrelayprovider%22%3Afalse%2C%22__relay_internal__pv__PolarisAIGMAccountLabelEnabledrelayprovider%22%3Afalse%7D&doc_id=27378030181834840`,
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
})

const _data = await _res.json()
const id =
  _data.data.xdt_api__v1__feed__user_timeline_graphql_connection.edges[0].node
    .user.pk

const res = await fetch('https://www.instagram.com/graphql/query', {
  headers: {
    accept: '*/*',
    'accept-language': 'en-US,en;q=0.9,pt;q=0.8',
    'cache-control': 'no-cache',
    'content-type': 'application/x-www-form-urlencoded',
    pragma: 'no-cache',
    priority: 'u=1, i',
    'sec-ch-prefers-color-scheme': 'dark',
    'sec-ch-ua':
      '"Chromium";v="148", "Google Chrome";v="148", "Not/A)Brand";v="99"',
    'sec-ch-ua-full-version-list':
      '"Chromium";v="148.0.7778.217", "Google Chrome";v="148.0.7778.217", "Not/A)Brand";v="99.0.0.0"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '""',
    'sec-ch-ua-platform': '"Windows"',
    'sec-ch-ua-platform-version': '"19.0.0"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'x-asbd-id': '359341',
    'x-bloks-version-id':
      '8c6b886e8c8169480f69ddea406ef61a5b9b1e99aa1fb678ce42845892fffdd4',
    'x-csrftoken': 'mAMprXxl9hmTqZGTfAgMXamNOcSgBwXe',
    'x-fb-friendly-name': 'PolarisStoriesV3ReelPageStandaloneQuery',
    'x-fb-lsd': 'vd81TqRYe8d4nyqk5n4kU3',
    'x-ig-app-id': '936619743392459',
    'x-ig-max-touch-points': '0',
    'x-root-field-name': 'xdt_api__v1__feed__reels_media',
    cookie:
      'ig_did=8BC9835D-417B-4BEB-BEFB-00AA4AA302EA; ig_nrcb=1; datr=0K_qaWkE3fa9KagjRt-NvL52; ps_l=1; ps_n=1; mid=agobkQALAAH0XrFLqbbvd4ls6xDH; csrftoken=mAMprXxl9hmTqZGTfAgMXamNOcSgBwXe; ds_user_id=73623284869; sessionid=73623284869%3AVkxrRQGCRSPzKg%3A21%3AAYhWgxOxAfHZXPMpozndUBIVi5i7zV7EF8db9wbI5A; rur="LDC\\05473623284869\\0541812342455:01ff1721091dbcafac90e9dab1315ee1006698464da62b69ba77a42d1872ee94408cbab3"; wd=646x599',
    Referer: 'https://www.instagram.com/imob.hunter/',
  },
  body: `av=17841473586092910&__d=www&__user=${id}&__a=1&__req=14&__hs=20611.HYP%3Ainstagram_web_pkg.2.1...0&dpr=1&__ccg=GOOD&__rev=1040989249&__s=hbypdt%3Arygv4s%3Awwjgpt&__hsi=7648505460960265509&__dyn=7xeUjG1mxu1syawKBAg5S1Dxu13wvoKewSAwHwNw9G2Saxa0k24o0B-q1ew6ywMwto2awgo9oO0n24oaEnxO1ywOwv89k2C1FwnE6a0D85m263ifK0EUjwGzEaE2iwNwmE2eUlwhEe87q10w51wLyES1TwVwDwHg2ZwrUK2K2WE5B08-269wr86C1mgO2m3zhA6bwg8rAwHxW1oxe6U5q0EoKmUhw4rwXyEcE4y16wAwj83KwRyrw&__csr=jgkMR7MB6iNaE44ijFLLlbdkDGjix8BdTvcytZul4aJNCGoFz_-TinlGhELA_GbGBjJ2kGBy9peaBqHjyFYx5uiCmK4t9eGmAAhepiHh9pqBgWh2qOyeAK4XAG8GWCFrDgOaU-nSQ8UKXyQbx-5UngpzEZDByFWCz-4EkWDGbKmiOeF9Hz8GhJGiAaAozBGmjAGciLzE_h8jwUGu9yoy4uagW8AxaV98G253UO4t4w9C01mUw1AK04BE03ogwNguXw3E9U0lgwFeawf4Epw4eg0mcwv99810UiV80FKpN014E4q223i5J020U2Ua0IpO5gK10w6VDxiEtw77xfDy49We3C04rm0OUbU04p203Ua1Cw3hm&__hsdp=gfF3K1610yH1sFy4NsjGGWhLiFiftsF2L1jikyVhhrwE28Vcvugqcem-8xcgcy8x6iwxpPrxS1xJK3912b82a2q48aUOE46SmC2J1C5EAi3C4ooxm1awOzUjwh8c8nwuU8F8C5ETwVwYwlWwUw8a2-2y48SE8EhBBgW1ewtovw-w4Tway4U8Uow1mS0TU7C057E3GU5-0gu7E0HG4o1dE1383szE0SO0Io461QOxC78vwpE3awn82vU&__hblp=08iU21wiFVEF0Hz8a-m2G7UvAocFUc8x4BzoDAyUOq1MyUDwgoy2iq9wCwAh48CxKqi6pXAxK8CgpABhWg4Gu9xy5otzUlCDwGCy8KumUixGcwCxGq1VUS5aUC5kdU8onwYyp8boqG4o9Eowzwg-2V0Ex27Ujx6ml29o4WcwpQ5oC3Ci0AUyU2mway4U8uUkwiU6q1Rw4tw7tw58wd-1Vw3Ku0ma0JUcK2-2-1lw9S4Uuximexe0Ro1FEhw4awCAw4cwba2Cew2Ro9k1LwAw-wjo462i1fOxx1O6Xwo9o20whGwn89o7Dw&__sjsp=gfF3K1610yGzgjaoxcn4AGKArQGkzTnagHMkXEyVkOBK2w8zANLugq7Eeogg96sNo7-m1Ww&__comet_req=7&fb_dtsg=NAfxMpW5TFQvXykajtNM3HWXlOHN47lXKoGO2ziulQWp_7bUon6KHWQ%3A17843696212148243%3A1780805822&jazoest=26340&lsd=vd81TqRYe8d4nyqk5n4kU3&__spin_r=1040989249&__spin_b=trunk&__spin_t=1780806449&__crn=comet.igweb.PolarisProfilePostsTabRoute&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisStoriesV3ReelPageStandaloneQuery&server_timestamps=true&variables=%7B%22reel_ids_arr%22%3A%5B%2245534319338%22%5D%2C%22__relay_internal__pv__PolarisCommunityNoteStoriesLabelEnabledrelayprovider%22%3Afalse%2C%22__relay_internal__pv__PolarisAIGMMediaWebLabelEnabledrelayprovider%22%3Afalse%7D&doc_id=27365355749744329`,
  method: 'POST',
})

const data = await res.json()

const urls = data.data.xdt_api__v1__feed__reels_media.reels_media[0].items.map(
  (item) => item.image_versions2.candidates[0].url,
)

console.log(urls)

document.addEventListener('DOMContentLoaded', () => {
  /* ─── DOM refs ─── */
  const form = document.getElementById('search-form')
  const inputEl = document.getElementById('username')
  const submitBtn = document.getElementById('submit-btn')
  const btnText = submitBtn.querySelector('.btn-text')
  const btnLoader = submitBtn.querySelector('.btn-loader')
  const btnIcon = submitBtn.querySelector('.btn-icon')
  const errorBox = document.getElementById('error-box')
  const errorText = document.getElementById('error-text')
  const resultsArea = document.getElementById('results-area')
  const profileBanner = document.getElementById('profile-banner')
  const profileName = document.getElementById('profile-username')
  const storyCountEl = document.getElementById('story-count')
  const grid = document.getElementById('stories-grid')
  const dlAllBtn = document.getElementById('download-all-btn')

  /* ─── Lightbox refs ─── */
  const lightbox = document.getElementById('lightbox')
  const lbStage = document.getElementById('lightbox-stage')
  const lbClose = document.getElementById('lightbox-close')
  const lbPrev = document.getElementById('lightbox-prev')
  const lbNext = document.getElementById('lightbox-next')
  const lbCounter = document.getElementById('lightbox-counter')
  const lbDownload = document.getElementById('lightbox-download')
  const lbDots = document.getElementById('lightbox-dots')

  /* ─── State ─── */
  let currentStories = []
  let currentIndex = 0

  /* ═══════════════════════════════════════════
     FORM SUBMIT
  ═══════════════════════════════════════════ */
  form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const username = inputEl.value.trim()
    if (!username) return

    /* ── Contas bloqueadas por decisão do administrador ── */
    const BLOCKED_ACCOUNTS = ['adrianacorretorasc']
    if (BLOCKED_ACCOUNTS.includes(username.toLowerCase().replace(/^@/, ''))) {
      showError(
        'Não é possível visualizar esta conta por decisão do administrador.',
      )
      return
    }

    setLoading(true)
    hideError()
    hideResults()
    currentStories = []

    // Skeleton placeholders
    showSkeletons(6)

    try {
      const res = await fetch(
        `/api/stories?username=${encodeURIComponent(username)}`,
      )
      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Failed to fetch stories.')

      currentStories = data.stories || []

      grid.innerHTML = ''

      if (currentStories.length === 0) {
        renderEmpty(username)
      } else {
        renderStories(currentStories, username)
      }

      showResults(username, currentStories.length)
    } catch (err) {
      console.error(err)
      grid.innerHTML = ''
      resultsArea.hidden = true
      showError(err.message)
    } finally {
      setLoading(false)
    }
  })

  /* ═══════════════════════════════════════════
     LOADING STATE
  ═══════════════════════════════════════════ */
  function setLoading(on) {
    inputEl.disabled = on
    submitBtn.disabled = on

    btnText.style.display = on ? 'none' : ''
    btnIcon.style.display = on ? 'none' : ''
    btnLoader.style.display = on ? 'block' : 'none'
  }

  /* ═══════════════════════════════════════════
     SKELETON PLACEHOLDERS
  ═══════════════════════════════════════════ */
  function showSkeletons(count) {
    resultsArea.hidden = false
    profileBanner.style.display = 'none'
    grid.innerHTML = ''

    for (let i = 0; i < count; i++) {
      const sk = document.createElement('div')
      sk.className = 'skeleton-card'
      sk.style.animationDelay = `${i * 0.08}s`
      grid.appendChild(sk)
    }
  }

  /* ═══════════════════════════════════════════
     SHOW / HIDE RESULTS
  ═══════════════════════════════════════════ */
  function showResults(username, count) {
    resultsArea.hidden = false
    profileBanner.style.display = 'flex'
    profileName.textContent = `@${username}`
    storyCountEl.textContent =
      count === 0
        ? 'No active stories'
        : `${count} active stor${count === 1 ? 'y' : 'ies'}`
  }

  function hideResults() {
    resultsArea.hidden = true
    grid.innerHTML = ''
  }

  /* ═══════════════════════════════════════════
     ERROR
  ═══════════════════════════════════════════ */
  function showError(msg) {
    errorText.textContent = msg
    errorBox.hidden = false
  }

  function hideError() {
    errorBox.hidden = true
    errorText.textContent = ''
  }

  /* ═══════════════════════════════════════════
     EMPTY STATE
  ═══════════════════════════════════════════ */
  function renderEmpty(username) {
    const div = document.createElement('div')
    div.className = 'empty-state'
    div.innerHTML = `
      <div class="empty-state-icon">📭</div>
      <h3>No active stories found</h3>
      <p>@${escHtml(username)} hasn't posted any stories in the last 24 hours, or their profile is private.</p>
    `
    grid.appendChild(div)
  }

  /* ═══════════════════════════════════════════
     RENDER STORIES
  ═══════════════════════════════════════════ */
  function renderStories(stories, username) {
    stories.forEach((story, idx) => {
      const card = document.createElement('div')
      card.className = 'story-card'
      card.role = 'listitem'
      card.tabIndex = 0
      card.setAttribute('aria-label', `Story ${idx + 1} of ${stories.length}`)

      /* ── Media ── */
      if (story.isVideo && story.videoUrl) {
        const vid = document.createElement('video')
        vid.src = story.videoUrl
        vid.className = 'story-media'
        vid.poster = story.url || ''
        vid.muted = true
        vid.loop = true
        vid.playsInline = true
        vid.preload = 'none'
        card.appendChild(vid)

        // Autoplay preview on hover
        card.addEventListener('mouseenter', () => vid.play().catch(() => {}))
        card.addEventListener('mouseleave', () => {
          vid.pause()
          vid.currentTime = 0
        })
      } else if (story.url) {
        const img = document.createElement('img')
        img.src = story.url
        img.className = 'story-media'
        img.loading = 'lazy'
        img.alt = `Story ${idx + 1} by @${username}`
        card.appendChild(img)
      }

      /* ── Overlay ── */
      const overlay = document.createElement('div')
      overlay.className = 'card-overlay'
      card.appendChild(overlay)

      /* ── Play / View icon ── */
      const playBtn = document.createElement('div')
      playBtn.className = 'card-play'
      playBtn.innerHTML = story.isVideo
        ? `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
        : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`
      card.appendChild(playBtn)

      /* ── Type badge ── */
      if (story.isVideo) {
        const badge = document.createElement('div')
        badge.className = 'card-badge'
        badge.innerHTML = `
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          Video
        `
        card.appendChild(badge)
      }

      /* ── Index label ── */
      const indexLabel = document.createElement('div')
      indexLabel.className = 'card-index'
      indexLabel.textContent = `${idx + 1} / ${stories.length}`
      card.appendChild(indexLabel)

      /* ── Open lightbox ── */
      const openLb = () => openLightbox(idx)
      card.addEventListener('click', openLb)
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          openLb()
        }
      })

      grid.appendChild(card)
    })
  }

  /* ═══════════════════════════════════════════
     LIGHTBOX
  ═══════════════════════════════════════════ */
  function openLightbox(index) {
    currentIndex = index
    lightbox.hidden = false
    document.body.style.overflow = 'hidden'
    buildDots()
    renderLightboxSlide()
    lbClose.focus()
  }

  function closeLightbox() {
    lightbox.hidden = true
    document.body.style.overflow = ''
    // Pause any playing video
    const vid = lbStage.querySelector('video')
    if (vid) vid.pause()
    lbStage.innerHTML = ''
  }

  function renderLightboxSlide() {
    lbStage.innerHTML = ''

    const story = currentStories[currentIndex]
    if (!story) return

    if (story.isVideo && story.videoUrl) {
      const vid = document.createElement('video')
      vid.src = story.videoUrl
      vid.controls = true
      vid.autoplay = true
      vid.playsInline = true
      vid.style.borderRadius = 'var(--radius-lg)'
      lbStage.appendChild(vid)
    } else if (story.url) {
      const img = document.createElement('img')
      img.src = story.url
      img.alt = `Story ${currentIndex + 1}`
      img.style.borderRadius = 'var(--radius-lg)'
      lbStage.appendChild(img)
    }

    lbCounter.textContent = `${currentIndex + 1} / ${currentStories.length}`
    lbDownload.href =
      story.isVideo && story.videoUrl ? story.videoUrl : story.url
    lbDownload.download = `story_${currentIndex + 1}`

    lbPrev.disabled = currentIndex === 0
    lbNext.disabled = currentIndex === currentStories.length - 1

    updateDots()
  }

  function buildDots() {
    lbDots.innerHTML = ''
    const total = currentStories.length
    const MAX_DOTS = 20
    const count = Math.min(total, MAX_DOTS)
    const dotWidth = count <= 10 ? '28px' : '14px'

    for (let i = 0; i < count; i++) {
      const dot = document.createElement('div')
      dot.className = 'dot'
      dot.style.width = dotWidth
      lbDots.appendChild(dot)
    }
  }

  function updateDots() {
    const dots = lbDots.querySelectorAll('.dot')
    dots.forEach((d, i) => d.classList.toggle('active', i === currentIndex))
  }

  lbClose.addEventListener('click', closeLightbox)

  lbPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--
      renderLightboxSlide()
    }
  })

  lbNext.addEventListener('click', () => {
    if (currentIndex < currentStories.length - 1) {
      currentIndex++
      renderLightboxSlide()
    }
  })

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox()
  })

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.hidden) return
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') {
      if (currentIndex > 0) {
        currentIndex--
        renderLightboxSlide()
      }
    }
    if (e.key === 'ArrowRight') {
      if (currentIndex < currentStories.length - 1) {
        currentIndex++
        renderLightboxSlide()
      }
    }
  })

  /* ─── Download All ─── */
  dlAllBtn.addEventListener('click', () => {
    currentStories.forEach((story, i) => {
      const url = story.isVideo && story.videoUrl ? story.videoUrl : story.url
      if (!url) return
      const a = document.createElement('a')
      a.href = url
      a.download = `story_${i + 1}`
      a.target = '_blank'
      a.rel = 'noopener noreferrer'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    })
  })

  /* ─── Utility ─── */
  function escHtml(str) {
    return str.replace(
      /[&<>"']/g,
      (c) =>
        ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#39;',
        })[c],
    )
  }
})

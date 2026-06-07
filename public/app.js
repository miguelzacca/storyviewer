document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('search-form');
  const input = document.getElementById('username');
  const submitBtn = document.getElementById('submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const loader = submitBtn.querySelector('.loader');
  const errorMsg = document.getElementById('error-message');
  const storiesGrid = document.getElementById('stories-grid');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = input.value.trim();
    if (!username) return;

    // Reset UI
    setLoading(true);
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';
    storiesGrid.innerHTML = '';

    try {
      const res = await fetch(`/api/stories?username=${encodeURIComponent(username)}`);
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to fetch stories.');
      }

      if (!data.stories || data.stories.length === 0) {
        showEmptyState(username);
      } else {
        renderStories(data.stories);
      }
    } catch (err) {
      console.error(err);
      errorMsg.textContent = err.message;
      errorMsg.style.display = 'block';
    } finally {
      setLoading(false);
    }
  });

  function setLoading(isLoading) {
    input.disabled = isLoading;
    submitBtn.disabled = isLoading;
    if (isLoading) {
      btnText.style.display = 'none';
      loader.style.display = 'block';
    } else {
      btnText.style.display = 'block';
      loader.style.display = 'none';
    }
  }

  function showEmptyState(username) {
    const div = document.createElement('div');
    div.className = 'empty-state';
    div.innerHTML = `
      <h3>No active stories found</h3>
      <p>@${username} hasn't posted any stories in the last 24 hours, or the profile is private.</p>
    `;
    storiesGrid.appendChild(div);
  }

  function renderStories(stories) {
    stories.forEach(story => {
      const card = document.createElement('div');
      card.className = 'story-card';

      if (story.isVideo && story.videoUrl) {
        const video = document.createElement('video');
        video.src = story.videoUrl;
        video.className = 'story-media';
        video.controls = true;
        video.autoplay = false;
        video.poster = story.url; // Use the image as a poster
        
        const badge = document.createElement('div');
        badge.className = 'video-badge';
        badge.textContent = 'Video';

        card.appendChild(video);
        card.appendChild(badge);
      } else if (story.url) {
        const img = document.createElement('img');
        img.src = story.url;
        img.className = 'story-media';
        img.loading = 'lazy';
        img.alt = 'Instagram Story';
        
        card.appendChild(img);
      }

      storiesGrid.appendChild(card);
    });
  }
});

function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  return (
    diffDays > 0 ? `${diffDays} days ago` :
    diffHours > 0 ? `${diffHours} hours ago` :
    diffMinutes > 0 ? `${diffMinutes} minutes ago` :
    diffSeconds > 0 ? `${diffSeconds} seconds ago` :
    'just now'
  );
}

export default postedAt;

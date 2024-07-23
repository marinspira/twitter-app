export default function timeDifference(dateString) {
  const now = new Date();
  const targetDate = new Date(dateString);

  const differenceInMillis = targetDate - now;

  const differenceInHours = Math.floor(differenceInMillis / (1000 * 60 * 60));
  const differenceInDays = Math.floor(differenceInHours / 24);

  if (differenceInHours < 24) {
    return `${differenceInHours}h`;
  } else {
    return `${differenceInDays}d`;
  }
}


import me from '@/assets/images/me.jpg'

const mockData = {
  user: {
    id: "1",
    username: "johndoe",
    name: "John Doe",
    profileImageUrl: me,
    bio: "Software developer. Tech enthusiast. Avid reader.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    followersCount: 1200,
    followingCount: 300,
    tweetsCount: 500,
    likesCount: 1500,
    joinedDate: "January 2020"
  },
  tweets: [
    {
      id: "101",
      userId: "1",
      content: "Just released a new blog post on React Native!",
      image: "https://example.com/blog-post-image.jpg",
      timestamp: "2024-07-23T10:00:00Z",
      likes: 150,
      retweets: 30,
      isLiked: true,
      isRetweeted: false,
      replies: [
        {
          id: "201",
          userId: "2",
          username: "janedoe",
          content: "Great post! Learned a lot.",
          timestamp: "2024-07-23T10:05:00Z"
        }
      ]
    },
    {
      id: "102",
      userId: "3",
      content: "Excited for the upcoming tech conference!",
      timestamp: "2024-07-22T09:00:00Z",
      likes: 100,
      retweets: 25,
      isLiked: false,
      isRetweeted: true,
      replies: []
    }
  ],
  notifications: [
    {
      id: "301",
      type: "like",
      content: "Jane Doe liked your tweet",
      timestamp: "2024-07-23T11:00:00Z",
      isRead: false
    },
    {
      id: "302",
      type: "follow",
      content: "Mike Ross started following you",
      timestamp: "2024-07-22T08:00:00Z",
      isRead: true
    }
  ],
  messages: [
    {
      id: "401",
      userId: "4",
      username: "mikeross",
      content: "Hey, are you attending the conference next week?",
      timestamp: "2024-07-21T07:00:00Z",
      isRead: true
    },
    {
      id: "402",
      userId: "5",
      username: "sarabrown",
      content: "Can you share the link to your latest blog post?",
      timestamp: "2024-07-20T06:00:00Z",
      isRead: false
    }
  ],
  profileSettings: {
    privacy: "public",
    notifications: {
      likes: true,
      retweets: true,
      newFollowers: true,
      directMessages: true
    },
    theme: "light"
  }
};

export default mockData;

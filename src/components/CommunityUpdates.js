import React from "react";

const CommunityUpdates = () => {
  // Mock community updates
  const updates = [
    {
      id: 1,
      type: "offer",
      title: "New Year Special: 50% Off on Pizzas!",
      content: "Celebrate the new year with our amazing pizza deals. Valid till Jan 31st.",
      date: "2024-01-15",
      author: "Campus Pizza Hub"
    },
    {
      id: 2,
      type: "event",
      title: "Food Festival This Weekend",
      content: "Join us for the annual campus food festival featuring cuisines from around the world!",
      date: "2024-01-14",
      author: "Student Council"
    },
    {
      id: 3,
      type: "announcement",
      title: "VCoins Loyalty Program Launched",
      content: "Earn VCoins on every order and redeem them for exciting rewards. Start ordering now!",
      date: "2024-01-12",
      author: "CampusCrave Team"
    },
    {
      id: 4,
      type: "meal_share",
      title: "Surplus Food Available",
      content: "Fresh sandwiches available for pickup at the Library Cafe. First come, first served!",
      date: "2024-01-13",
      author: "Anonymous Student"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'offer': return 'bg-green-100 text-green-800';
      case 'event': return 'bg-blue-100 text-blue-800';
      case 'announcement': return 'bg-purple-100 text-purple-800';
      case 'meal_share': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="pt-28 px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Community Updates</h1>

      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(update.type)} mr-2`}>
                    {update.type.replace('_', ' ').toUpperCase()}
                  </span>
                  <h2 className="text-xl font-semibold">{update.title}</h2>
                </div>
                <p className="text-gray-700 mb-3">{update.content}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {update.author}</span>
                  <span>{update.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {updates.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No updates available</p>
        </div>
      )}
    </div>
  );
};

export default CommunityUpdates;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { markAsRead, clearNotifications } from "../Utils/notificationsSlice";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((store) => store.notifications.notifications);
  const navigate = useNavigate();

  const handleMarkAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  const handleClearAll = () => {
    dispatch(clearNotifications());
  };

  const handleNotificationClick = (notification) => {
    if (notification.type === 'order' && notification.orderId) {
      navigate(`/track-order/${notification.orderId}`);
    }
    if (!notification.read) {
      dispatch(markAsRead(notification.id));
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="pt-28 px-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <button
          onClick={handleClearAll}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear All
        </button>
      </div>

      <div className="mb-4">
        <p className="text-gray-600">{unreadCount} unread notifications</p>
      </div>

      <div className="space-y-4">
        {notifications.slice().reverse().map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow ${notification.read ? 'bg-gray-100' : 'bg-white border-l-4 border-orange-500'}`}
            onClick={() => handleNotificationClick(notification)}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(notification.date).toLocaleString()}
                </p>
                {notification.type === 'order' && notification.orderId && (
                  <p className="text-sm text-blue-600 mt-1">Click to track order</p>
                )}
              </div>
              {!notification.read && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkAsRead(notification.id);
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                >
                  Mark Read
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No notifications yet</p>
        </div>
      )}
    </div>
  );
};

export default Notifications;

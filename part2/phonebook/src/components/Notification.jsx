export const Notification = ({ message, isError }) => {
  if (!message) return null;
  const notificationClass = `notification ${isError ? "error" : "success"}`;
  return <div className={notificationClass}>{message}</div>;
};

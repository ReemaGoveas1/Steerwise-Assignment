const DetailSection = ({ title, children }) => {
  return (
    <div className="mb-4 overflow-hidden">
      <div className="px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>
      <div className="p-4 space-y-3">
        {children}
      </div>
    </div>
  );
};
export default DetailSection;
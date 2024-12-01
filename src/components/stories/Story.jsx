const Story = ({ story, index }) => {
  return (
    <li className="mb-6 ms-6">
      <span className="absolute size-10 bg-green-200 rounded-full -start-5 ring-5 ring-white"></span>
      <div className="ml-4">
        <h3 className="font-medium leading-tight">{story.header}</h3>
        <p className="text-sm">{story.content}</p>
      </div>
    </li>
  );
};

export default Story;

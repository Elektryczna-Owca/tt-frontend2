interface LoadMoreButtonProps {
    onClick: () => void;
};

const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        className="
        text-gray-500
        hover:text-gray-900
        px-2 py-1
        cursor-pointer
        transition-colors
        font-medium
        "
    >
        Load more
    </button>
);

export default LoadMoreButton;

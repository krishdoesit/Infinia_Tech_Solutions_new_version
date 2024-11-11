const SectionDivider = () => {
    return (
        <div className="relative my-28 w-full max-w-full">
            <div className="w-full border-b border-dashed border-gray-300" role="separator"></div>
            <span className="border-divider absolute left-1/2 top-1/2 h-3 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-gray-100"></span>
        </div>
    );
};

export default SectionDivider;

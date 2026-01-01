export function SkeletonCard() {
    return (
        <div className="card-pro animate-pulse">
            <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
            <div className="space-y-3">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
                <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
        </div>
    );
}

export function SkeletonProject() {
    return (
        <div className="card-pro animate-pulse">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                    <div className="h-6 bg-gray-700 rounded w-1/2"></div>
                </div>
            </div>
            <div className="space-y-3 mb-4">
                <div className="h-4 bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-700 rounded w-5/6"></div>
            </div>
            <div className="flex gap-2 mb-4">
                <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
                <div className="h-6 w-20 bg-gray-700 rounded-full"></div>
                <div className="h-6 w-16 bg-gray-700 rounded-full"></div>
            </div>
            <div className="h-20 bg-gray-700 rounded mb-4"></div>
        </div>
    );
}

export function SkeletonText({ lines = 3 }) {
    return (
        <div className="animate-pulse space-y-3">
            {[...Array(lines)].map((_, i) => (
                <div
                    key={i}
                    className="h-4 bg-gray-700 rounded"
                    style={{ width: i === lines - 1 ? '75%' : '100%' }}
                ></div>
            ))}
        </div>
    );
}

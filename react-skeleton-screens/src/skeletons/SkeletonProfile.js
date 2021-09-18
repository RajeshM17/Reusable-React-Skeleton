import React from "react";
import SkeletonElement from "./SkeletonElement";
import "./Skeleton.css";
import Shimmer from "./Shimmer";
function SkeletonProfile({ theme }) {
  const themeClass = theme || "light";
  return (
    <div className={`skeleton-wrapper ${themeClass}`}>
      <div className="skeleton-profile">
        {/* leftdiv */}
        <div>
          <SkeletonElement type="avatar" />
        </div>
        {/* rightdiv */}
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
      <Shimmer/>
    </div>
  );
}

export default SkeletonProfile;

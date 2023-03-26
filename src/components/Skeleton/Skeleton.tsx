import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.scss";

function Loading() {
  return (
    <SkeletonTheme baseColor="#D1CDCD" highlightColor="#C0C0C3">
      <div>
        <Skeleton className="img" />
        <div className="skeleton-card">
          <Skeleton className="row" count={3} />
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Loading;

import React from "react";

function Logo({ size, color, width, height, backgroundColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : size}
      height={height ? height : size}
      fill="none"
      viewBox="0 0 101 98"
    >
      <ellipse
        cx="50.5"
        cy="49"
        fill={backgroundColor}
        rx="50.5"
        ry="49"
      ></ellipse>
      <path
        fill={color}
        d="M23.004 59.196c-1.81 0-3.463-.42-4.956-1.26a9.56 9.56 0 01-3.556-3.556c-.859-1.53-1.288-3.248-1.288-5.152s.43-3.612 1.288-5.124c.877-1.53 2.063-2.716 3.556-3.556 1.493-.859 3.145-1.288 4.956-1.288 1.83 0 3.49.43 4.984 1.288a9.154 9.154 0 013.528 3.528c.859 1.512 1.288 3.23 1.288 5.152 0 1.923-.43 3.64-1.288 5.152a9.356 9.356 0 01-3.528 3.556c-1.493.84-3.155 1.26-4.984 1.26zm0-2.212c1.363 0 2.585-.317 3.668-.952 1.101-.635 1.96-1.54 2.576-2.716.635-1.176.952-2.539.952-4.088 0-1.568-.317-2.93-.952-4.088-.616-1.176-1.465-2.081-2.548-2.716-1.083-.635-2.315-.952-3.696-.952-1.381 0-2.613.317-3.696.952-1.083.635-1.941 1.54-2.576 2.716-.616 1.157-.924 2.52-.924 4.088 0 1.55.308 2.912.924 4.088.635 1.176 1.493 2.081 2.576 2.716 1.101.635 2.333.952 3.696.952zm15.068-.084h7.532V59H35.16v-2.1l7.448-11.172h-7.392v-2.072h10.332v2.072L38.072 56.9zm17.53 2.352c-1.437 0-2.744-.327-3.92-.98-1.157-.653-2.072-1.577-2.744-2.772-.653-1.213-.98-2.613-.98-4.2 0-1.568.336-2.95 1.008-4.144.69-1.213 1.624-2.137 2.8-2.772 1.176-.653 2.492-.98 3.948-.98s2.772.327 3.948.98c1.176.635 2.1 1.55 2.772 2.744.69 1.195 1.036 2.585 1.036 4.172 0 1.587-.355 2.987-1.064 4.2a7.208 7.208 0 01-2.828 2.772c-1.195.653-2.52.98-3.976.98zm0-2.24a5.38 5.38 0 002.576-.644c.803-.43 1.447-1.073 1.932-1.932.504-.859.756-1.904.756-3.136 0-1.232-.243-2.277-.728-3.136s-1.12-1.493-1.904-1.904a5.22 5.22 0 00-2.548-.644c-.933 0-1.792.215-2.576.644-.765.41-1.381 1.045-1.848 1.904-.467.859-.7 1.904-.7 3.136 0 1.25.224 2.305.672 3.164.467.859 1.083 1.503 1.848 1.932.765.41 1.605.616 2.52.616zM87.26 43.656L82.472 59H79.84l-3.696-12.18L72.448 59h-2.632L65 43.656h2.604l3.528 12.88 3.808-12.88h2.604l3.724 12.908 3.472-12.908h2.52z"
      ></path>
    </svg>
  );
}

export default Logo;
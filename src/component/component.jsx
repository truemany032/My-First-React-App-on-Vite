import React from "react";

export const Navbar = () => {
    return (
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center p-6 shadow-md bg-white z-10">
        <h1 className="text-2xl font-bold">T^T</h1>
        <div>
          <button className="mr-4 px-4 py-2 border rounded">Log in</button>
          <button className="px-4 py-2 bg-black text-white rounded">Sign up</button>
        </div>
      </nav>
    );
  };

export const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-12 pt-24">
      <div className="max-w-md text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">1##################</h2>
        <p className="text-gray-600">
        2##########################################
        </p>
      </div>
      <div className="max-w-md mt-6 md:mt-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzrPSRxKfN9xnzGWpiWnuFJn3g4YM66QMuw&s"
          alt="Author with cat"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-md mt-6 md:mt-0">
        <h3 className="font-bold text-lg">1##################################################</h3>
        <p className="text-gray-600">
          2#############################################################
        </p>
        <p className="mt-2 text-gray-600">
            3##############################################################
        </p>
      </div>
    </section>
  );
};

// export const ArticleList = () => {
//     return (
//       <section className="p-12">
//         <h2 className="text-3xl font-bold mb-6">Latest articles</h2>
//         <div className="flex gap-4 mb-4">
//           <button className="px-4 py-2 bg-gray-200 rounded">Highlight</button>
//           <button className="px-4 py-2 bg-gray-200 rounded">Cat</button>
//           <button className="px-4 py-2 bg-gray-200 rounded">Inspiration</button>
//           <button className="px-4 py-2 bg-gray-200 rounded">General</button>
//           <input type="text" placeholder="Search" className="ml-auto px-4 py-2 border rounded" />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {[1, 2, 3, 4, 5, 6].map((_, index) => (
//             <div key={index} className="bg-white shadow-md rounded-lg p-4">
//               <div className="w-full h-48 bg-gray-300 rounded"></div>
//               <span className="text-xs text-green-600 mt-2 inline-block">Cat</span>
//               <h3 className="font-bold text-lg mt-2">[Title]</h3>
//               <p className="text-gray-600 mt-2">[Short description]</p>
//               <div className="flex items-center mt-4 text-gray-500 text-sm">
//                 <span>Thompson P.</span>
//                 <span className="mx-2">|</span>
//                 <span>11 September 2024</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

const ArticleCard = ({ image, category, title, description, author, date }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="w-full h-48 bg-gray-300 rounded" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <span className="text-xs text-green-600 mt-2 inline-block">{category}</span>
        <h3 className="font-bold text-lg mt-2">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
        <div className="flex items-center mt-4 text-gray-500 text-sm">
          <span>{author}</span>
          <span className="mx-2">|</span>
          <span>{date}</span>
        </div>
      </div>
    );
  };

export const ArticleList = ({ articles }) => {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-bold mb-6">Latest articles</h2>
      <div className="flex gap-4 mb-4">
        <button className="px-4 py-2 bg-gray-200 rounded">Highlight</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Cat</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Inspiration</button>
        <button className="px-4 py-2 bg-gray-200 rounded">General</button>
        <input type="text" placeholder="Search" className="ml-auto px-4 py-2 border rounded" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </section>
  );
};


export const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-6 text-center mt-12">
        <p className="text-sm">&copy; 2024 Your Blog Name. All rights reserved.</p>
        <div className="mt-4">
          {/* Add social media links or additional footer content here */}
        </div>
      </footer>
    );
  };

// const PersonalBlog = () => {
    // const articles = [
    //     {
    //       image: "",
    //       category: "Cat",
    //       title: "[Title]",
    //       description: "[Short description]",
    //       author: "Thompson P.",
    //       date: "11 September 2024"
    //     },
    //     {
    //       image: "",
    //       category: "Cat",
    //       title: "[Title]",
    //       description: "[Short description]",
    //       author: "Thompson P.",
    //       date: "11 September 2024"
    //     },
    //     {
    //       image: "",
    //       category: "Cat",
    //       title: "[Title]",
    //       description: "[Short description]",
    //       author: "Thompson P.",
    //       date: "11 September 2024"
    //     },
    //     {
    //       image: "",
    //       category: "Cat",
    //       title: "[Title]",
    //       description: "[Short description]",
    //       author: "Thompson P.",
    //       date: "11 September 2024"
    //     }
    //   ];
    //   return (
    // <div>
    //   <Navbar />
    //   <HeroSection />
    // </div>
//   );
// };
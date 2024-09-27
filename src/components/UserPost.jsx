import { useState } from "react";

export default function UserPost() {
  const [blogPostData, setBlogPostData] = useState({
    title: "",
    body: "",
  });
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (blogPostData.title && blogPostData.body) {
            fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: JSON.stringify({
                userId: 1,
                title: blogPostData.title,
                body: blogPostData.body,
              }),
              headers: {
                "Content-type": "Application/json",
              },
            })
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((err) => console.log(err));
          }
        }}
        style={{ maxWidth: 300, display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name=""
          id="title"
          value={blogPostData.title}
          onChange={(e) =>
            setBlogPostData((currentState) => ({
              ...currentState,
              title: e.target.value,
            }))
          }
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          name=""
          id="title"
          value={blogPostData.body}
          onChange={(e) =>
            setBlogPostData((currentState) => ({
              ...currentState,
              body: e.target.value,
            }))
          }
        />
        <button>Create a Post</button>
      </form>

      <div>
        
      </div>
    </div>
  );
}

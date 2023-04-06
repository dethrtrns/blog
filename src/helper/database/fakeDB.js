import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";

const categories = [
  {
    title: "All Categories",
    value: "all",
    image:
      "https://images.unsplash.com/photo-1437915219556-8c287594737a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Inspiration",
    value: "inspiration",
    image:
      "https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1010&q=80",
  },
  {
    title: "Journal",
    value: "journal",
    image:
      "https://images.unsplash.com/photo-1526280760714-f9e8b26f318f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
  },
  {
    title: "Opinion",
    value: "opinion",
    image:
      "https://images.unsplash.com/photo-1522148543752-8cdaa654a796?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
  },
  {
    title: "Self-Love",
    value: "selfLove",
    image:
      "https://images.unsplash.com/photo-1500395235658-f87dff62cbf3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Culture",
    value: "culture",
    image:
      "https://images.unsplash.com/photo-1533551268962-824e232f7ee1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  },
  {
    title: "Politics",
    value: "politics",
    image:
      "https://images.unsplash.com/photo-1541726260-e6b6a6a08b27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80",
  },
  {
    title: "Science",
    value: "science",
    image:
      "https://images.unsplash.com/photo-1496065187959-7f07b8353c55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Health",
    value: "health",
    image:
      "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Humour",
    value: "humour",
    image:
      "https://images.unsplash.com/photo-1605256428669-db63d53de807?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
  },
  {
    title: "Horor",
    value: "horor",
    image:
      "https://images.unsplash.com/photo-1509248961158-e54f6934749c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1022&q=80",
  },
  {
    title: "Letter",
    value: "letter",
    image:
      "https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1267&q=80",
  },
  {
    title: "Erotica",
    value: "erotica",
    image:
      "https://images.unsplash.com/photo-1530988516267-448e5f12206b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Life",
    value: "life",
    image:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Fiction",
    value: "fiction",
    image:
      "https://images.unsplash.com/photo-1595802319126-e619695faf79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80",
  },
  {
    title: "Poetry",
    value: "poetry",
    image:
      "https://images.unsplash.com/photo-1515104882246-521e5ba18f5e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Story",
    value: "story",
    image:
      "https://images.unsplash.com/photo-1543726969-a1da85a6d334?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1107&q=80",
  },
  {
    title: "Philosophy",
    value: "philosophy",
    image:
      "https://images.unsplash.com/photo-1494797262163-102fae527c62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
  },
  {
    title: "Productivity",
    value: "productivity",
    image:
      "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1234&q=80",
  },
  {
    title: "Miscellaneous",
    value: "miscellaneous",
    image:
      "https://images.unsplash.com/photo-1617541357090-661104aeebd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
  },
  {
    title: "Nature",
    value: "nature",
    image:
      "https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
  },
];

const sidebar = {
  title: "About Me",
  image: "./bgUnsplash.jpg",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
};

const archives = [
  { title: "March 2020", url: "#" },
  { title: "February 2020", url: "#" },
  { title: "January 2020", url: "#" },
  { title: "November 1999", url: "#" },
  { title: "October 1999", url: "#" },
  { title: "September 1999", url: "#" },
  { title: "August 1999", url: "#" },
  { title: "July 1999", url: "#" },
  { title: "June 1999", url: "#" },
  { title: "May 1999", url: "#" },
  { title: "April 1999", url: "#" },
];

const social = [
  { name: "GitHub", url: "", icon: GitHubIcon },
  { name: "Twitter", url: "", icon: TwitterIcon },
  { name: "Facebook", url: "", icon: FacebookIcon },
  { name: "Instagram", url: "", icon: InstagramIcon },
  { name: "LinkedIn", url: "", icon: LinkedInIcon },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCXWy9C_EMlpn1jitox2FDsw",
    icon: YouTubeIcon,
  },
];

export function getCategories() {
  return categories.filter((c) => c);
}

export function getSocial() {
  return social.filter((s) => s);
}

export function getArchives() {
  return archives.filter((a) => a);
}

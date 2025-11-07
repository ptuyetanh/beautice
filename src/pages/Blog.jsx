import React from "react";
import blog from "@/assets/images/blog.png";
import { Link } from "react-router-dom";
import BlogItem from "@/components/BlogItem";
import search from "@/assets/images/search.svg";
import post1 from "@/assets/images/post1.png";
import facebookColor from '@/assets/images/facebookColor.svg';
import twitterColor from '@/assets/images/twitterColor.svg';
import instagramColor from '@/assets/images/instagramColor.svg';

function Blog() {
  return (
    <main>
      <section
        className="section-blog section-slogan"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="background-color"></div>
        <div className="title">
          <h2>Blog</h2>
        </div>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <span>Blog</span>
          </li>
        </ul>
      </section>
      <section className="section-blog-news container">
        <div className="blog-left">
          <BlogItem />
          <BlogItem />
          <div className="pagination">
            <button className="prev">{"<<"}</button>
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
            <button className="next">{">>"}</button>
          </div>
        </div>
        <div className="blog-right">
          <div className="search">
            <input type="text" placeholder="Search here ..." />
            <button type="submit">
              <img src={search} alt="" />
            </button>
          </div>
          <div className="widget recentPost">
            <div className="title">
              <h3>Recent Post</h3>
            </div>
            <div className="content">
              <div className="post-item">
                <div className="image">
                  <img src={post1} alt="" />
                </div>
                <div className="post-info">
                  <span className="post-date">01 jan 2021</span>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
              <div className="post-item">
                <div className="image">
                  <img src={post1} alt="" />
                </div>
                <div className="post-info">
                  <span className="post-date">01 jan 2021</span>
                  <p className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="widget categories">
            <div className="title">
              <h3>Categories</h3>
            </div>
            <ul className="content">
              <li>
                <Link to="#">Dental Care</Link>
              </li>
              <li>
                <Link to="#">Neurology</Link>
              </li>
              <li>
                <Link to="#">Cardiology</Link>
              </li>
              <li>
                <Link to="#">Orthopedic</Link>
              </li>
              <li>
                <Link to="#">Laboratory</Link>
              </li>
            </ul>
          </div>
          <div className="widget tags">
            <div className="title">
              <h3>Tags</h3>
            </div>
            <div className="content">
              <Link to="#">Dental</Link>
              <Link to="#">Care</Link>
              <Link to="#">Health</Link>
              <Link to="#">Medicine</Link>
              <Link to="#">Doctor</Link>
              <Link to="#">Teeth</Link>
              <Link to="#">Smile</Link>
            </div>
          </div>
          <div className="widget social">
            <div className="title">
              <h3>Social Connect</h3>
            </div>
            <div className="content">
              <Link to="#" className="facebook">
                <img src={facebookColor} alt="facebookColor" />
              </Link>
              <Link to="#" className="twitter">
                <img src={twitterColor} alt="" />
              </Link>
              <Link to="#" className="instagram">
                <img src={instagramColor} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Blog;

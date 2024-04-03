import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Blog = () => {
  return (
    <>
    <Navbar/>
      <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[10px] mx-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className=" block text-5xl font-semibold text-primary">
                  Our Blogs
                </span>
               <div className="h-[1px] bg-primary mt-5"></div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap">
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Roadmap For Your Dream Career: Where to Star"
              CardDescription="Creating opportunities involves a proactive approach to life. It means being aware of your goals, skills, and the world around you. Rather than passively waiting for something good to happen, you take charge of your destiny. This mindset shift is crucial, especially in the ever-changing landscape of careers and personal development. Instead of viewing challenges as...."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The Power of Choice – A Career in Architecture"
              CardDescription="You are the one who has the authority to decide how to live your life. Nobody has the right to make suggestions or statements that might affect you. Never second-guess your abilities, and take the initiative to make vital decisions without any influence. Without getting side-tracked, you should fix your attention on your goals and seek to find solutions to meet them.

                  "
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle=" Essential Skills High Schoolers Need to Excel in a Career in Data Science
              "
              CardDescription="In an era dominated by data, data science emerges not just as a rewarding career but as an essential one. Dubbed The Sexiest Job of the 21st Century by the Harvard Business Review, its allure is undeniable. The World Economic Forum indicates that an astounding 85% of organizations are diving headfirst into frontier technologies. Even amidst economic unpredictability, ..."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle=" Essential Skills High Schoolers Need to Excel in a Career in Data Science
              "
              CardDescription="In an era dominated by data, data science emerges not just as a rewarding career but as an essential one. Dubbed The Sexiest Job of the 21st Century by the Harvard Business Review, its allure is undeniable. The World Economic Forum indicates that an astounding 85% of organizations are diving headfirst into frontier technologies. Even amidst economic unpredictability, ..."
              image="https://i.ibb.co/7jdcnwn/image-03.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="Roadmap For Your Dream Career: Where to Star"
              CardDescription="Creating opportunities involves a proactive approach to life. It means being aware of your goals, skills, and the world around you. Rather than passively waiting for something good to happen, you take charge of your destiny. This mindset shift is crucial, especially in the ever-changing landscape of careers and personal development. Instead of viewing challenges as...."
              image="https://i.ibb.co/Cnwd4q6/image-01.jpg"
            />
            <BlogCard
              date="Dec 22, 2023"
              CardTitle="The Power of Choice – A Career in Architecture"
              CardDescription="You are the one who has the authority to decide how to live your life. Nobody has the right to make suggestions or statements that might affect you. Never second-guess your abilities, and take the initiative to make vital decisions without any influence. Without getting side-tracked, you should fix your attention on your goals and seek to find solutions to meet them.

                  "
              image="https://i.ibb.co/Y23YC07/image-02.jpg"
            />
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Blog;

const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3 pb-10">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-black sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {CardTitle}
              </a>
            </h3>
            <p className="text-base text-body-color dark:text-dark-6">
              {CardDescription}
            </p>
            
          </div>
          
        </div>
        <div className="flex justify-center items-center"><div className="text-white bg-primary transition-transform transform-gpu hover:scale-110 p-3 rounded-sm">Read More</div></div>
      </div>
      
    </>
  );
};

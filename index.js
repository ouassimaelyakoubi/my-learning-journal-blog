import {articles} from './data.js'
const articleContainer = document.getElementById("blog");
let articlesToShow = 3;
const viewMoreBtn = document.getElementById("view-more");

function renderArticles() {
    // Render only the initial articles
    for (let i = 0; i < articlesToShow; i++) {
        createArticle(articles[i]);
    }

    // Hide the button if all articles are displayed
    if (articlesToShow >= articles.length) {
        viewMoreBtn.style.display = "none";
    }
}

function createArticle(article) {
    const articleElement = document.createElement("article");
    articleElement.classList.add("blog");
    articleElement.innerHTML = `
        <img class="blog-img" src=${article.image}>
        <time>${article.date}</time>
        <h2>${article.title}</h2>
        <p class="disc">${article.preview}</p>
    `;
    articleContainer.appendChild(articleElement);
}

renderArticles();

viewMoreBtn.addEventListener("click", function () {
     // Append all remaining articles at once
     for (let i = articlesToShow; i < articles.length; i++) {
        createArticle(articles[i]);
    }

    // Update articlesToShow to the total length
    articlesToShow = articles.length;

    // Hide the button after appending all articles
    viewMoreBtn.style.display = "none";
});

const hero = document.getElementById("article-preview")
hero.addEventListener("click", function () {
    
        document.getElementById("article-preview").innerHTML = `
            <div class="full-hero-section">
                <div class="full-hero-article">
                <time>FEBRUARY 15, 2025</time>
                <h1>My new journey as a Frontend Developer.</h1>
                <p class="full-hero-para">
                    After several months of learning through the Scrimba Frontend Developer Career Path,
                     I’ve made huge progress in my coding journey. This platform has helped me go from basic HTML and CSS to building responsive,
                     interactive websites — all while growing my confidence step by step.
                </p>
                </div>
                <img class="full-hero-image" src="images/article-image.png">
                <article class="full-hero-article">
                    <h2>How I stay committed to learning</h2>
                        <p class="full-hero-para">Discipline and consistency have always been a challenge for me.
                         I used to get excited about learning but would quickly lose focus or skip days.
                          What changed things for me was building real projects as I learned.
                           Even if it was something small, applying the concepts helped things stick.
                        </p>
                        <p class="full-hero-para">I also realized that documenting my journey — through journaling or blog posts like this one — helped me stay accountable and track how far I’ve come.
                         It keeps me motivated on the tough days, and it reminds me that progress is still progress, even if it’s slow.

                        </p>
                        <h2>How I got started</h2>
                        <p class="full-hero-para">I began by taking notes while watching Scrimba lessons,
                         and then writing quick summaries of what I learned in my own words.
                          Later, I started creating simple web pages and experimenting with designs.

                        </p>
                        <p class="full-hero-para">That habit of reflecting, writing,
                         and building helped me truly understand what I was learning — and it’s the reason I decided to start this learning journal.
                          It’s not just a way to track my growth,
                           but also to share what I learn with others who might be on a similar path.

                        </p>
                </article>
                <button class="back-button" onclick="goBack()">← Back</button>
                
            </div>
            <h2 class="full-hero-blog-title">Recent Posts</h2>
            
        `;
    

    window.goBack = function () {
        location.reload(); // Reload the page to restore original content
    };
});


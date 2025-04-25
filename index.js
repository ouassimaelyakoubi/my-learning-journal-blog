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
                <h1>My new journey as a bootcamp student.</h1>
                <p class="full-hero-para">
                    After several months of learning in the Frontend Developer Career Path,
                    I've made the big jump over to the Bootcamp to get expert code reviews
                    of my Solo Projects and meet like-minded peers.
                </p>
                </div>
                <img class="full-hero-image" src="images/article-image.png">
                <article class="full-hero-article">
                    <h2>How I stay committed to learning</h2>
                    <p class="full-hero-para">I like to think of myself as a lifelong learner.
                    I used to spend hours and hours learning, then try to create simple projects using what I learned or work new techniques into existing projects.
                    </p>
                    <p class="full-hero-para">While that was fun, I felt like it would be helpful to share what I was learning and most things about my journey with the world.
                    </p>
                    <h2>How I got started</h2>
                    <p class="full-hero-para">I started simple and gradually grew my learning journal site. I would take notes about what I was learning.
                    After each learning session, I'd use my notes to not only reflect on what I learned but also write short summaries of what I learned using my own words.
                    </p>
                    <p class="full-hero-para">That helped me grok what I was learning,
                    and I realized that posting my learning summaries was also helping others learn and stay motivated.
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


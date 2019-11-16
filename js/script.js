/* eslint-disable no-undef */
{
  'use strict';

  const titleClickHandler = function (event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);

    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post-author';

  function generateTitleLinks(customSelector = '') {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);

    function clearTitleList() {
      titleList.innerHTML = '';
      // document.querySelectorAll('.titles').innerHTML = '';
    }

    clearTitleList();

    /* [DONE] find all the articles or articles with tag and save them to variable: articles */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    //console.log(customSelector);
    //console.log(optArticleSelector + customSelector);

    let html = '';

    for (article of articles) {

      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      /* [DONE] find the title element */
      /* [DONE] get the title from the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;

      /* [DONE] create HTML of the link */
      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

      /* [ALMOST DONE] insert link into html variable */
      html = html + linkHTML;
      // titleList.insertAdjacentHTML('beforeEnd', 'linkHTML');

    }

    titleList.innerHTML = html;

    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  }

  generateTitleLinks();

  function generateTags() {
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);
    //console.log(articles);

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE] find tags wrapper */
      const tagsWrapper = article.querySelector(optArticleTagsSelector);
      // console.log(tagsWrapper);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
      //console.log(articleTags);

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');
      //console.log(articleTagsArray);

      /* {DONE] START LOOP: for each tag */
      for (let tag of articleTagsArray) {

        /* [DONE] generate HTML of the link */
        const tagLinkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
        //console.log(tagLinkHTML);

        /* [DONE] add generated code to html variable */
        html = html + tagLinkHTML;
        //console.log(html);

        /* END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */
      tagsWrapper.innerHTML = html;

      /* END LOOP: for every article: */
    }
  }

  generateTags();

  function tagClickHandler(event) {
    console.log('tagClickHandler');

    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(this);

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
    console.log(tag);

    /* [DONE] find all tag links with class active */
    const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
    console.log(activeTagLinks);

    /* [DONE] START LOOP: for each active tag link */
    for (let activeTagLink of activeTagLinks) {

      /* [DONE] remove class active */
      activeTagLink.classList.remove('active');

      /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const activeTagLinksEqualToHref = document.querySelectorAll('a[href="' + href + '"]');

    /* [DONE] START LOOP: for each found tag link */
    for (let activeTagLinkEqualToHref of activeTagLinksEqualToHref) {

      /* [DONE] add class active */
      activeTagLinkEqualToHref.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }

  function addClickListenersToTags() {

    /* [DONE] find all links to tags */
    const links = document.querySelectorAll('.post-tags a');
    // console.log(links);

    /* [DONE] START LOOP: for each link */
    for (let link of links) {

      /* [DONE} add tagClickHandler as event listener for that link */
      link.addEventListener('click', tagClickHandler);

      /* [DONE] END LOOP: for each link */
    }

  }

  addClickListenersToTags();

  function generateAuthors() {
    //console.log('generateAuthors');
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(optArticleSelector);

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE] find author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);
      //console.log(authorWrapper);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get author from data-author attribute */
      const articleAuthor = article.getAttribute('data-author');
      // console.log(articleAuthor);

      /* [DONE] generate HTML of the link */
      const authorLinkHTML = '<a href="#' + articleAuthor + '">' + articleAuthor + '</a>';
      console.log(authorLinkHTML);

      /* [DONE] add generated code to html variable */
      html = authorLinkHTML;
      //console.log(html);

      /* [DONE] insert HTML link into the author wrapper */
      authorWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }

  }

  generateAuthors();

  function authorClickHandler(event) {
    console.log('authorClickHandler');

    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
    console.log(this);

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "author" and extract author from the "href" constant */
    const author = href.replace('#', '');
    console.log(author);

    /* [DONE] find all authors links with class active */
    const activeAuthorLinks = document.querySelectorAll('a.active[href^="#"]');
    console.log(activeAuthorLinks);

    /* [DONE] START LOOP: for each active tag link */
    for (let activeAuthorLink of activeAuthorLinks) {

      /* [DONE] remove class active */
      activeAuthorLink.classList.remove('active');

      /* [DONE] END LOOP: for each active author link */
    }

    /* [DONE] find all author links with "href" attribute equal to the "href" constant */
    const activeAuthorLinksEqualToHref = document.querySelectorAll('a[href="' + href + '"]');

    /* {DONE] START LOOP: for each found author link */
    for (let activeAuthorLinkEqualToHref of activeAuthorLinksEqualToHref) {

      /* [DONE] add class active */
      activeAuthorLinkEqualToHref.classList.add('active');

      /* [DONE] END LOOP: for each found tag link */
    }

    /* [DONE] execute function "generateTitleLinks" with author selector as argument */
    generateTitleLinks('[data-author="' + author + '"]');

  }

  function addClickListenersToAuthors() {

    /* [DONE] find all links to authors */
    const links = document.querySelectorAll('.post-author a');
    // console.log(links);

    /* [DONE] START LOOP: for each link */
    for (let link of links) {

      /* [DONE} add authorClickHandler as event listener for that link */
      link.addEventListener('click', authorClickHandler);

      /* [DONE] END LOOP: for each link */
    }

  }

  addClickListenersToAuthors();

}

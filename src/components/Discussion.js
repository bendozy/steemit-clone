import React from 'react';
import TimeAgo from 'react-timeago'
import '../css/Discussion.css';

const Discussion = (props) => (
  <article className="discussion hentry with-image">
    <div className="discussion__collapse">
      <div className="float-right">
      </div>
    </div>
    <div className="discussion-header show-for-small-only">
      <h3 className="entry-title">
        <a href={`https://steemit.com/${props.url}`}>
          {props.title}
        </a>
      </h3>
    </div>
    <div className="discussion__time_author_category_small show-for-small-only">
      <span className="vcard">
        <a href="/chainbb/@jesta/chainbb-beta-update-new-forums-claiming-rewards-post-previews">
          <span className="updated">
            <span><TimeAgo date={props.last_update} /></span>
          </span>
        </a>
        &nbsp;by&nbsp;
        <span className="author">
          <a href={`https://steemit.com/@${props.author}`}>
            <strong>{`@${props.author}`}</strong>
          </a>
          &nbsp;
          <span className="Reputation" title="Reputation">69</span>
          &nbsp;
        </span>
        &nbsp;in&nbsp;
        <strong>
          <a href={`https://steemit.com/trending/${props.category}`}>{props.category}</a>
        </strong>
      </span>
    </div>
    <span className="discussion-image" style={{ backgroundImage: 'url(https://steemitimages.com/256x512/https://steemdb.com/chainbb/11.png)'}}></span>
    <div className="discussion__content">
      <div className="discussion-header show-for-medium">
        <h3 className="entry-title">
          <a href={`https://steemit.com/${props.url}`}>
            {props.title}
          </a>
        </h3>
      </div>
      <div className="discussion-body entry-content">
        <a href="/chainbb/@jesta/chainbb-beta-update-new-forums-claiming-rewards-post-previews">
          The last week has been a busy one, but I've been listening to feedback and have a few of the most requested features…
        </a>
      </div>
      <div className="discussion__footer">
        <span className="Voting">
          <span className="Voting__inner">
            <span className="Voting__button Voting__button-up">
              <a href="#" title="Upvote">
                <span className="Icon chevron-up-circle" style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}>
                  <svg version="1.1" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                    <g id="Chevron_Up_Circle">
                      <circle cx="16" cy="16" fill="none" r="15" stroke="#121313"></circle>
                      <path d="M16.699,11.293c-0.384-0.38-1.044-0.381-1.429,0l-6.999,6.899c-0.394,0.391-0.394,1.024,0,1.414 c0.395,0.391,1.034,0.391,1.429,0l6.285-6.195l6.285,6.196c0.394,0.391,1.034,0.391,1.429,0c0.394-0.391,0.394-1.024,0-1.414 L16.699,11.293z" fill="#121313"></path>
                    </g>
                  </svg>
                </span>
              </a>
            </span>
          </span>
        </span>
        <div className="DropdownMenu">
          <a href="#">
            <span>
              <span className="FormattedAsset">
                <span className="prefix">$</span>
                <span className="integer">2,755</span>
                <span className="decimal">.46</span>
              </span>
              <span
                className="Icon dropdown-arrow"
                style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}>
                <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px"
                >
                  <g>
                    <polygon points="128,90 256,218 384,90"></polygon>
                  </g>
                </svg>
              </span>
            </span>
          </a>
          <ul className="VerticalMenu menu vertical VerticalMenu">
            <li><span>Potential Payout $2,755.46</span></li>
            <li><span><span title="6/17/2017, 6:54:18 PM"><span>in 7 days</span></span></span></li>
          </ul>
        </div>
        <span className="VotesAndComments">
          <span className="VotesAndComments__votes" title="550 votes">
            <span
              className="Icon chevron-up-circle Icon_1x"
              style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
            >
              <svg version="1.1" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
                <g id="Chevron_Up_Circle">
                  <circle cx="16" cy="16" fill="none" r="15" stroke="#121313"></circle>
                  <path d="M16.699,11.293c-0.384-0.38-1.044-0.381-1.429,0l-6.999,6.899c-0.394,0.391-0.394,1.024,0,1.414 c0.395,0.391,1.034,0.391,1.429,0l6.285-6.195l6.285,6.196c0.394,0.391,1.034,0.391,1.429,0c0.394-0.391,0.394-1.024,0-1.414 L16.699,11.293z" fill="#121313"></path>
                </g>
              </svg>
            </span>&nbsp;{props.net_votes}
          </span>
          <span className="VotesAndComments__comments">
            <a
              href="/chainbb/@jesta/chainbb-beta-update-new-forums-claiming-rewards-post-previews#comments"
              title="82 responses. Click to respond."
            >
              <span
                className="Icon chatboxes"
                style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
              >
                <svg id="Layer_1" version="1.1" viewBox="0 0 512 512" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                  <g>
                    <path d="M294.1,365.5c-2.6-1.8-7.2-4.5-17.5-4.5H160.5c-34.7,0-64.5-26.1-64.5-59.2V201h-1.8C67.9,201,48,221.5,48,246.5v128.9 c0,25,21.4,40.6,47.7,40.6H112v48l53.1-45c1.9-1.4,5.3-3,13.2-3h89.8c23,0,47.4-11.4,51.9-32L294.1,365.5z"></path>
                    <path d="M401,48H183.7C149,48,128,74.8,128,107.8v69.7V276c0,33.1,28,60,62.7,60h101.1c10.4,0,15,2.3,17.5,4.2L384,400v-64h17 c34.8,0,63-26.9,63-59.9V107.8C464,74.8,435.8,48,401,48z"></path>
                  </g>
                </svg>
              </span>&nbsp;{props.children}
            </a>
          </span>
        </span>
        <span className="discussion__time_author_category">
          <span className="Reblog__button Reblog__button-inactive">
            <a href="#" title="Resteem">
              <span
                className="Icon reblog"
                style={{ display: 'inline-block', width: '1.12rem', height: '1.12rem' }}
              >
                <svg id="Layer_1" style={{enableBackground: 'new 0 0 512 512'}} version="1.1" viewBox="0 0 512 512" x="0px" xmlns="http://www.w3.org/2000/svg" y="0px">
                  <path d="M448,192l-128,96v-64H128v128h248c4.4,0,8,3.6,8,8v48c0,4.4-3.6,8-8,8H72c-4.4,0-8-3.6-8-8V168c0-4.4,3.6-8,8-8h248V96 L448,192z"></path>
                </svg>
              </span>
            </a>
          </span>
          <span className="show-for-medium">
            <span className="vcard">
              <a href="/chainbb/@jesta/chainbb-beta-update-new-forums-claiming-rewards-post-previews">
                <span className="updated">
                  <span><TimeAgo date={props.last_update} /></span>
                </span>
              </a>
              &nbsp;by&nbsp;
              <span className="author">
                <a href={`https://steemit.com/@{props.author}`}>
                  <strong>{`@${props.author}`}</strong>
                </a>
                &nbsp;
                <span className="Reputation" title="Reputation">69</span>
              </span> in <strong>
              <a href={`https://steemit.com/trending/${props.category}`}>{props.category}</a>
            </strong>
            </span>
          </span>
        </span>
      </div>
    </div>
  </article>
);

export default Discussion;

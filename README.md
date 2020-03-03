# GM5 Simple Lightbox React Component

Dependencies:
<ul>
  <li>react</li>
  <li>jquery</li>
  <li>svg-inline-react</li>
  <li>react-id-swiper</li>
</ul>

<h2>Installing</h2>
<code>$ npm install -s gm5-lightbox-react</code>
<h2>Import Component</h2>
<code>import GM5_Simple_Lightbox from '../components/gm5-simple-lightbox';</code>
<h2>Using Component</h2>
<h3>Single Video</h3>
<code>
   <GM5_Simple_Lightbox
      type='video'
      title="Assistir Trailer"
      class="trailer"
      gallery={
          [
              {
                  id_video: filme.video_id,
                  type: 'video'
              }
          ]
      }
  />
</code>

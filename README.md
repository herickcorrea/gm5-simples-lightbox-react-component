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
<h3>HTML Content</h3>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type='html'
	title='The title of my content'
	className='some-css-class'
	content='&lt;h2&#62;
To generate promotional coupons, look for augmented reality posters in the windows of the stores participating in the promotion.&lt;/h2&#62;'
	buttons={
	    [
		{
		    label: 'OK',
		    cor: '#ECAC4F',
		    callback: function (e,LightboxFunctions)
		    {
			LightboxFunctions._closeLightbox(); //Just close the Lightbox.
		    }
		},
	    ]
	}
/&#62;
</pre>
</code>
<h3>Single Video</h3>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type="video"
	label="Click to Watch Video" //Label and title of button <a>
	class="trailer"
	video="https://videopress.com/embed/rMmjE65Y"
/&#62;
</pre>
</code>
<h3>Gallery Swiper with pictures and videos</h3>
<h4><strong>It's not working yet</strong>I</h4>
<code>
&lt;GM5_Simple_Lightbox
	type='gallery'
	label="Click to See the Gallery"  //Label and title of button <a>
	class="my-beatiful-gallery"
	gallery={
		[
			{
		    		image_full: "https://c1.staticflickr.com/9/8185/29188230410_76cc92e97c_b.jpg",
				image_thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcScCrJ_qsEZ2Njvns5AV9eXV-WdBbAYq81AbKzGZ3V767Z95C0J", //This thumbnail is necessary. If yout don´t have, you can repeat the full image here.
				width: 947,
				height: 555,
		    		type: 'image'
			},
			{
		    		url_video: "https://videopress.com/embed/rMmjE65Y",
		   		type: 'video'
			}
	    	]
	}
/&#62;
</code>

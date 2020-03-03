# GM5 Simple Lightbox React Component

<h2>Installing</h2>

<code>$ npm install -s gm5-lightbox-react</code>

<h3>Dependencies (auto installs):</h3>

<ul>
  <li>react</li>
  <li>jquery</li>
  <li>svg-inline-react</li>
  <li>react-id-swiper</li>
</ul>

<h2>Import Component</h2>

<code>import GM5_Simple_Lightbox from '../components/gm5-simple-lightbox';</code>

<h2>Using Component</h2>

<h3>Single Images</h3>

<h4>Button with text label - can use HTML tags</h4>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type='image' // Required
	label='<span>Click to open image</span>' // Required
	class='some-css-class'
	image='https://cannes.tur.br/wp-content/uploads/2017/05/rio-de-janeiro-wallpaper-high-resolution-hd-background-hd-screensavers-....jpg' // Required
/&#62;
</pre>
</code>

<h4>Button with thumbnail - can use HTML tags</h4>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type='image' // Required
	label='&lt;img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3fZ1AOXQACkBNmAdUFlNgDf8FT9P8irq8ykWqS_Bpw8RFCZd9" /&#62;' // Required
	class='some-css-class'
	image='https://cannes.tur.br/wp-content/uploads/2017/05/rio-de-janeiro-wallpaper-high-resolution-hd-background-hd-screensavers-....jpg' // Required
/&#62;
</pre>
</code>

<h3>HTML Content</h3>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type='html' // Required
	title='The title of my content' // Required
	className='some-css-class'
	content='&lt;h2&#62;
To generate promotional coupons, look for augmented reality posters in the windows of the stores participating in the promotion.&lt;/h2&#62;' // Required
	buttons={
	    [
		{
		    label: 'OK', // Required
		    cor: '#ECAC4F', // Required
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
	type="video" // Required
	label="Click to Watch Video" //Label and title of button <a> -> Required
	class="trailer" 
	video="https://videopress.com/embed/rMmjE65Y"
/&#62;
</pre>
</code>
<h3>Gallery Swiper with pictures and videos</h3>
<h4><strong>It's not working yet!</strong></h4>
<code>
<pre>
&lt;GM5_Simple_Lightbox
	type='gallery' // Required
	label="Click to See the Gallery"  //Label and title of button <a> -> Required
	class="my-beatiful-gallery"
	gallery={
		[
			{
		    		image: "https://c1.staticflickr.com/9/8185/29188230410_76cc92e97c_b.jpg",
				type: 'image' // Required
			},
			{
		    		url_video: "https://videopress.com/embed/rMmjE65Y",
		   		type: 'video' // Required
			}
	    	]
	}
/&#62;
</pre>
</code>

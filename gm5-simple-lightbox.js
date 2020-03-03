import React, { Component } from "react";
import InlineSVG from 'svg-inline-react';
import $ from 'jquery';

import SimpleSwiper from './SimpleSwiper';
import Imagem from './Imagem';

import "./gm5_lightbox_react.css";


const svgCloseIcon = `
    <svg x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve">
        <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333"/>
    </svg>
`;

function createMarkup(html)
{
    return { __html: html };
}

class GM5_Simple_Lightbox extends Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            DocumentReady: false,
        };
        
        this._LightboxGallery   = this._LightboxGallery.bind(this);
        this._LightboxVideo     = this._LightboxVideo.bind(this);
        this._closeLightbox     = this._closeLightbox.bind(this);
    }

    //region [Private]
    _htmlSlideImages(item)
    {
        return `<li>${item}</li>`;
    }

    _htmlSlideVideo(gallery)
    {
        var htmlSlide = '';

        $.map(gallery, function (value, index)
        {
            if (value.type == 'video')
            {
                htmlSlide += `
                    <li class="swiper-slide">
                        <div class="videoWrapper">
                            <iframe allowfullscreen="allowfullscreen" frameborder="0" src="//www.youtube-nocookie.com/embed/${value.url_video}?autoplay=1&amp;autohide=1&amp;fs=1&amp;rel=0&amp;hd=1&amp;enablejsapi=1&amp;html5=1" scrolling="no"></iframe>
                        </div>
                    </li>
                `;
            }

            if (value.type == 'image')
            {
                htmlSlide += `
                    <li class="swiper-slide">
                        <div class="videoWrapper">
                             ${<Imagem
                                    classes="imgLazyLoad"
                                    image={value.image_full}
                                    thumbnail={value.image_thumbnail}
                                    width={filme.width}
                                    height={filme.height}
                            />}
                        </div>
                    </li>
                `;
            }
        });

        return htmlSlide;       
    }

    _openLightbox()
    {
        $('#GM5ligthbox').css({ 'display': 'block' })
        $('#GM5ligthbox .overlay').stop().animate({ opacity: 1 }, 200, function () {
            $(this).find('.swiper-container, .htmlContainer, .videoContainer').stop().animate({ opacity: 1 }, 200);
        });

        console.log('open vdeo')
    }   

    _closeLightbox()
    {        
        $('#GM5ligthbox .overlay, #GM5ligthbox .overlay .swiper-container, #GM5ligthbox .overlay .htmlContainer, #GM5ligthbox .overlay .videoContainer').stop().animate({ opacity : 0 },300,function()
        {
            $('#GM5ligthbox').remove();
        });

        $(document).mouseup(function (e)
        {
            var container = $('#GM5ligthbox .overlay .swiper-container, #GM5ligthbox .overlay .htmlContainer');

            if (!container.is(e.target) && container.has(e.target).length === 0)
            {
                $('#GM5ligthbox .overlay, #GM5ligthbox .overlay .swiper-container, #GM5ligthbox .overlay .htmlContainer, #GM5ligthbox .overlay .videoContainer').stop().animate({ opacity : 0 },300,function()
                {
                    $('#GM5ligthbox').remove();

                    $(document).unbind('mouseup');
                });
            }
        });
    }    

    _LightboxGallery()
    {
        let self = this;
        
        var htmlSlide = `
            <div id="GM5ligthbox">
                <div class="overlay">
                    <a href="#" class="GM5lightboxClose">
                        <svg x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve">
                            <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333"/>
                        </svg>
                    </a>
                    <div class="swiper-container">
                        <ul class="swiper-wrapper">
                            ${self._htmlSlideVideo( this.props.gallery )}                    
                        </ul>
                    </div>
                    <i class="icon-spin4 animate-spin" aria-hidden="true"></i>
                </div>
            </div>`;

        $('#__next').append(htmlSlide);

        self._openLightbox();

        $('#GM5ligthbox a.GM5lightboxClose').on('click',function()
        {
            self._closeLightbox();
        });

        if( $('#GM5ligthbox') )
        {
            $(document).mouseup(function(e)
            {
                var container = $('#GM5ligthbox .overlay .swiper-container');

                if (!container.is(e.target) && container.has(e.target).length === 0)
                {
                    self._closeLightbox();
                }
            });
        }
    }

    _LightboxVideo()
    {
        let self = this;

        console.log('video')

        var htmlSlide = `
            <div id="GM5ligthbox" class="video">
                <div class="overlay">
                    <a href="#" class="GM5lightboxClose">
                        <svg x="0px" y="0px" viewBox="0 0 298.667 298.667" style="enable-background:new 0 0 298.667 298.667;" xml:space="preserve">
                            <polygon points="298.667,30.187 268.48,0 149.333,119.147 30.187,0 0,30.187 119.147,149.333 0,268.48 30.187,298.667 149.333,179.52 268.48,298.667 298.667,268.48 179.52,149.333"/>
                        </svg>
                    </a>
                    <div class="videoContainer">
                        <div class="wrapVideo">
                            <iframe allowfullscreen="allowfullscreen" frameborder="0" src="${this.props.video}" scrolling="no"></iframe>
                        </div>
                    </div>
                    <i class="icon-spin4 animate-spin" aria-hidden="true"></i>
                </div>
            </div>`;
        
        console.log(htmlSlide)

        $('#__next').prepend(htmlSlide);

        self._openLightbox();

        $('#GM5ligthbox a.GM5lightboxClose').on('click', function () {
            self._closeLightbox();
        });

        if( $('#GM5ligthbox') )
        {
            $(document).mouseup(function(e)
            {
                var container = $('#GM5ligthbox .overlay .videoContainer');

                if (!container.is(e.target) && container.has(e.target).length === 0)
                {
                    self._closeLightbox();
                }
            });
        }
    }

    _CallBack(e,attributes)
    {
        e.preventDefault();

        attributes.callback(e,this);
    }

    componentDidMount()
    {
        this.setState({ DocumentReady:true });
    }
    //endregion

    //region [Main]
    render()
    {
        const type = this.props.type;

        if (type == 'html')
        {
            if (this.state.DocumentReady)
            {
                return (
                    <div id="GM5ligthbox" className={'default '+(this.props.className) ? this.props.className : ''} style={{ display: 'block' }}>
                        <div className="overlay" style={{ opacity: 1 }}>
                            <a href="#" className="GM5lightboxClose" onClick={this._closeLightbox()}><InlineSVG src={svgCloseIcon} /></a>
                            <div className="htmlContainer" style={{ display: 'block', opacity: 1 }}>
                                <div className="htmlWraper">
                                    {(this.props.title) ? <div className='content' dangerouslySetInnerHTML={createMarkup('<h1>' + this.props.title + '</h1>')} /> : ''}
                                    {(this.props.content) ? <div className='content' dangerouslySetInnerHTML={createMarkup(this.props.content)} /> : ''}
                                    {
                                        (this.props.buttons) ?
                                            <ul className="buttons">
                                                {
                                                    this.props.buttons.map((button, key) =>
                                                        <li key={key}>
                                                            <button style={{ backgroundColor: button.cor }} onClick={e => this._CallBack(e,button)}>{button.label}</button>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        : ''
                                    }
                                </div>
                            </div>
                            <i className="icon-spin4 animate-spin" aria-hidden="true"></i>
                        </div>
                    </div>
                )
            }
            else
            {
                return (
                    <div id="preloader"><i className="icon-spin4 animate-spin" aria-hidden="true"></i></div>
                );
            }            
        }

        if (type == 'gallery')
        {
            return (
                <a href="#" title={this.props.label} className={this.props.class + ' gm5-lightbox-ignite'} onClick={this._LightboxGallery}>
                    {this.props.label}
                </a>
            )
        }

        if (type == 'video') {
            return (
                <a href="#" title={this.props.label} className={this.props.class + ' gm5-lightbox-ignite'} onClick={this._LightboxVideo}>
                    {this.props.label}
                </a>
            )
        }
    }
    //endregion
}

export default GM5_Simple_Lightbox;
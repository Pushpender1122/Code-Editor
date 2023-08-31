import React, { useState } from 'react'
import './textarea.css'
import { FaHtml5 } from 'react-icons/fa';
import { ImCss3 } from 'react-icons/im';
import { BiLogoJavascript } from 'react-icons/bi';
import { BsPlayFill } from 'react-icons/bs';
function Textarea() {
    const [content, setContent] = useState('');
    const [csscontent, setCssContent] = useState('');
    const [jscontent, setjscontent] = useState('');
    const handleHtmlChange = (e) => {
       
        setContent(e.target.value + `<style> ${csscontent} </style>` + `<script>${jscontent}</script>`)
    }
    const handleCssChange = (e) => {
    
        setCssContent(e.target.value);
        setContent(content + `<style>${e.target.value}</style>` + `<script>${jscontent}</script>`)
    }
    const handleJsChange = (e) => {
        setjscontent(e.target.value);
        setContent(content + `<style>${csscontent}</style>` + `<script>${e.target.value}</script>`)
    }
    return (
        <>
            <div className='d-flex justify-content-evenly mb-4 flex-wrap'>
                <div class="form-group text-white">
                    <label htmlFor="exampleFormControlTextarea1" className="margin-custom">Html</label>
                    <FaHtml5 size={25} />
                    <textarea class="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="9" style={{ width: '25rem' }} onChange={handleHtmlChange}></textarea>
                </div>
                <div class="form-group text-white">
                    <label htmlFor="exampleFormControlTextarea1" className="margin-custom">Css</label>
                    <ImCss3 size={25} />
                    <textarea class="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="9" style={{ width: '25rem' }} onChange={handleCssChange}></textarea>
                </div>
                <div class="form-group text-white">
                    <label htmlFor="exampleFormControlTextarea1" className="margin-custom">JS</label>
                    <BiLogoJavascript size={25} />
                    <textarea class="form-control bg-dark text-white" id="exampleFormControlTextarea1" rows="9" style={{ width: '25rem' }} onChange={handleJsChange}></textarea>
                </div>
            </div>
            <div class="bottom">
                <label className='text-white'>Output</label>
                <BsPlayFill size={25} color='#fff' />
                <iframe id='output' sandbox='allow-scripts' className='text-white' srcDoc={`<style>* { color: white; }</style>${content}`}></iframe>
            </div>

        </>
    )
}

export default Textarea

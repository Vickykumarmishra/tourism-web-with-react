import React from 'react'
import { Link,BrowserRouter } from 'react-router-dom'
export default function Breadcrumb() {
  return (
    <div>
      
      {/**breadcrumb starts*/}
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <BrowserRouter>
    <li class="breadcrumb-item active" aria-current="page">Home</li>
    <li class="breadcrumb-item"><Link to="#">bread2</Link></li>
    <li class="breadcrumb-item"><Link to="#">bread3</Link></li>
    
    </BrowserRouter>
  </ol>
</nav>

{/**breadcrumb ends */}

    </div>
  )
}

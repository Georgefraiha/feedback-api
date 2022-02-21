import Card from '../components/shared/Card'
import React from 'react'
import {Link} from 'react-router-dom';

function About() {
  return (
    <Card>
      <div className="about">
<h1>About This Project</h1>
 <p>This is a react app to leave feedback for a product or service</p>
<p>Version: 1.0</p>
<p><Link to="/">Back to home page</Link></p>
      </div>
      
      </Card>
  )
}

export default About
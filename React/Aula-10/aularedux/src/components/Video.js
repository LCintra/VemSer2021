import React from 'react'
import {connect} from 'react-redux'

function Video({activeLesson,activeModule}) {
  return (
    <div>
      <div>
        <h2>Módulo: {activeModule.title}</h2>
      </div>
      <div>
        <h3>Aula: {activeLesson.title}</h3>
      </div>
    </div>
  )
}


export default connect(state => ({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule
})) (Video)
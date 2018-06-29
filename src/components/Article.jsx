// Импорт реакта для каждого файла компонента
import React, {Component} from 'react'

class Article extends Component {

	constructor(props){
		super(props)

		this.state = {
			// по умолчанию
			isOpen: props.defaultOpen
		}		
	}


	render(){
		// получаем статью
		const {article} = this.props 
		// Если функция возвращает true и есть текст для статьи
		const body = this.state.isOpen && <section className = "card-text">{article.text}</section>

		return (
			<div className = "card mx-auto mt-3" style = {{width: '50%'}}>
				<div className = "card-header">
					<h2>
					{article.title}
					<button onClick={this.handleClick} className = "btn btn-primary btn-lg float-right">
						{this.state.isOpen ? 'close' : 'open'}
					</button>
					</h2>
				</div>
				<div className = "card-body">
					{body}
					<h6 className="card-subtitle text-muted pt-3">creation date: {(new Date(article.date)).toDateString()}</h6>
				</div>
			</div>
		)		
	}

	// Меняем состояние компонента по клику
	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

}

// Экспорт для использования в других файлах	
export default Article
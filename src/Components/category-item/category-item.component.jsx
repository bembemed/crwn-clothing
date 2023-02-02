import './category-item.styless.scss'

const CategoryItem = ({category})=>{

    const {title , imageUrl } = category
    return <div className="category-container">
    <div className="background-image" style={{
        backgroundImage: `url(${imageUrl})`
    }}></div>
    <div className="category-body-container">
      <h2>{title}</h2>
      <div>shop now</div>
    </div>
  </div>
}

export default CategoryItem
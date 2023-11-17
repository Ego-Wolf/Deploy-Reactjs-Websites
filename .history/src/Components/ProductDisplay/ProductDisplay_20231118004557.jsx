import React from 'react'
import './ProductDisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"



const ProductDisplay = (props) => {
    const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">${product.old_price}</div>
          <div className="productdisplay-right-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, inventore nisi harum, voluptatibus nobis incidunt itaque fugiat molestias ea vitae pariatur quasi? Numquam tempore iste mollitia, illum labore quae molestias?
          Quaerat, sed facilis. Distinctio officiis nesciunt exercitationem mollitia aliquid harum a tempore recusandae. Sit maxime eos nobis corporis officia nam eius. Accusantium, accusamus in odio harum beatae ipsam expedita dolorum.
          Voluptates numquam rerum odio minus magni adipisci necessitatibus, nulla eaque perspiciatis quibusdam laudantium ratione illum vitae inventore rem illo asperiores harum sapiente. Hic sapiente deleniti ipsam nemo obcaecati, aperiam cupiditate.
          Necessitatibus commodi iure nam eos animi voluptatibus quaerat, autem officiis provident, dicta ipsa error eius numquam totam corrupti facilis magni culpa, obcaecati mollitia aliquam? Vero officia mollitia ipsam voluptatum explicabo.
          In doloribus consequuntur laboriosam cupiditate adipisci alias. Ea in dicta, distinctio quas vel adipisci deleniti consectetur fugiat repellat molestiae magnam eaque corrupti maiores libero doloremque voluptas iure sunt quis qui!
          Illo sed, laboriosam pariatur odit soluta sapiente similique fugit dolorum iste aperiam rerum possimus omnis obcaecati architecto. Numquam maxime ipsam pariatur delectus, natus nesciunt a rerum sit dolorum molestiae fuga!
          Ea omnis vitae cupiditate illo, velit nihil voluptate commodi fuga. Expedita labore suscipit magni obcaecati et excepturi qui, facere ab maxime voluptas vel? Distinctio, aspernatur necessitatibus atque laudantium tenetur ex.
          Magnam odio ut ducimus numquam culpa veniam optio minus quo voluptate nulla totam nobis, maiores tenetur ea. Soluta nostrum esse eum magnam. Molestiae, officia reiciendis officiis consequatur quas quod rerum?
          Dicta tempore voluptate quo hic voluptatum quaerat animi inventore, autem perspiciatis similique porro nam dolorem modi id dolores aperiam deserunt. Nemo nesciunt temporibus repellendus error quasi dolorum vitae iste quisquam.
          Provident laudantium at impedit ea fugiat id consectetur repellat sit eos pariatur in vel delectus hic molestias libero, cum veniam tempora officia? Veritatis, expedita adipisci commodi sapiente quo sunt nam!
          Numquam neque expedita iste nisi doloremque illo provident? Deleniti veritatis explicabo voluptatum a sed, impedit, sapiente autem eos distinctio, cumque praesentium perferendis deserunt unde velit! Illum sapiente aliquam quisquam eius.
          Quaerat assumenda ratione, id debitis similique aspernatur porro doloremque dolorem quam qui, atque molestias aut blanditiis mollitia deleniti vitae a voluptatem quibusdam voluptatum! Sit molestias recusandae inventore consequatur minus soluta.
          Eaque veniam nisi modi dignissimos repellendus quae laboriosam corporis deserunt quidem labore commodi nesciunt quasi pariatur eligendi harum quod, maxime culpa dolor aliquam. Quasi ut veritatis eligendi inventore eaque tempore.
          Eveniet voluptatem veniam, aliquam delectus debitis laudantium maiores aut laboriosam fuga? Quas consequuntur nisi iste, reiciendis, distinctio id aperiam pariatur temporibus incidunt sequi provident commodi odio. Ipsa recusandae laborum dolores.
          Vitae, nobis totam adipisci cupiditate illo, ipsam atque ut laborum cum asperiores dolores eaque inventore accusantium sed dicta optio! Pariatur fugiat voluptate vitae culpa repellendus tempora doloremque aut illo blanditiis.
          Alias sint totam et, ad recusandae ex ipsum voluptatem harum magni quae eaque, corrupti perspiciatis corporis ea minima maiores deserunt blanditiis soluta aut impedit neque optio sit incidunt? Id, expedita.
          Esse commodi sit sequi at similique eos rem, eveniet doloribus recusandae, veritatis voluptatibus placeat aperiam vel odit repellendus facere, suscipit sapiente hic eaque. Corporis autem temporibus dignissimos optio, harum sunt.
          Hic veritatis, blanditiis iste mollitia asperiores debitis facilis dolorum sequi molestiae cupiditate fugiat, architecto, quibusdam corrupti enim consequatur ducimus natus doloribus tenetur quam? Magni voluptas veritatis ullam soluta obcaecati beatae?
          Repellendus voluptatum repudiandae sint ut quis ea, inventore magni, blanditiis eligendi quasi commodi iusto quisquam? Maiores rerum, tenetur molestiae ipsa, suscipit repudiandae ab tempora consequatur libero reiciendis numquam quidem cumque.
          Vitae ad reprehenderit odit consequatur explicabo sunt distinctio eos? A, perspiciatis vero delectus ea esse reiciendis. Expedita, id quae! Praesentium pariatur itaque velit minus ad dolores ducimus consequuntur provident eius!
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay

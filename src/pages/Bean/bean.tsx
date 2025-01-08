import { useParams } from "react-router-dom";
import style from "./bean.module.css";
import { useEffect, useState } from "react";
import { BeanType } from "../../types/bean";

const Bean = () => {
  // params
  const params = useParams();
  //   console.log(params);
  // {id: '2'}   id - тот id, который задали в router  path: "/bean/:id"
  // id: "2"
  // [[Prototype]]:  Object

  const [beanData, setBeanData] = useState<BeanType | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const req = await fetch(
          `https://jellybellywikiapi.onrender.com/api/Beans/${params.id}`
        );
        const data = await req.json();
        setBeanData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {beanData && (
        <div
          className={style.bean}
          style={{ backgroundColor: beanData.backgroundColor }}
        >
          <img src={beanData.imageUrl} className={style.img} alt="imageUr" />
          <div className={style.box}>
            <h2 className={style.title}>{beanData.flavorName}</h2>
            <h3 className={style.description}>{beanData.description}</h3>
            <p className={style.ingredients}>
              {beanData.ingredients.map((item, index) => {
                return <span key={index}>{item}, </span>;
              })}
            </p>
            {beanData.glutenFree === true ? (
              <p className={style.gluten}>With gluten</p>
            ) : (
              <p className={style.gluten}>Without gluten</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Bean;

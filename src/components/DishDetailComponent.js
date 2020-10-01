import React, { useEffect } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const Dishdetail = ({ dish }) => {
  useEffect(() => {
    console.log("Dishdetail LifeCycle: useEffect as componentDidMount");
  }, []);

  console.log({
    msg: "Dishdetail LifeCycle: render; twice in debug mode",
    dish,
  });
  return (
    <div className="container">
      <div className="row">
        {renderSelectedDish(dish)}
        {renderComments(dish)}
      </div>
    </div>
  );
};

function renderSelectedDish(dish) {
  console.log({ msg: "renderSelectedDish", dish });

  return (
    <div className="col-12 col-md-5 m-1">
      {dish && (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )}
    </div>
  );
}

function renderComments(dish) {
  console.log({ msg: "renderComments", dish });

  return (
    <div className="col-12 col-md-5 m-1">
      {dish && dish.comments && (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled text-left">
            {dish.comments.map((c) => {
              return (
                <li key={c.id}>
                  <div>{c.comment}</div>{" "}
                  <div>
                    -- {c.author} &nbsp;&nbsp;{" "}
                    {new Date(c.date).toISOString().slice(0, 10)}
                  </div>
                  <br />{" "}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dishdetail;

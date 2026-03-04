function Dataset(){

return(

<div className="section">

<div className="card">

<h2>Dataset Information</h2>

<p>
The obesity prediction system uses a structured health dataset containing
1610 individuals and 15 lifestyle related attributes. The dataset includes
demographic information such as age and gender, physiological indicators
such as height and weight, and behavioural variables such as diet patterns,
physical activity level, sleep duration, and daily water consumption.
</p>

<p>
Lifestyle behaviours play a significant role in obesity development.
Variables such as fast food consumption, frequency of vegetable intake,
daily meals, and snacking habits help identify dietary behaviour patterns.
Additionally, features such as smoking habits, technology usage,
transportation methods, and exercise frequency provide insights into
physical activity and sedentary lifestyle risks.
</p>

<p>
The target variable of the dataset represents different obesity categories.
Using these behavioural and physiological features, predictive systems can
estimate the probability of obesity and classify individuals into risk
categories. In this web system the prediction output is simplified into
three levels: Low Risk, Average Risk, and High Risk to help users easily
understand their health status.
</p>

<p>
This dataset demonstrates how lifestyle and behavioural factors influence
obesity risk. Such predictive systems are widely used in healthcare
analytics to support early risk detection and promote healthier lifestyle
decisions among individuals.
</p>

</div>

</div>

)

}

export default Dataset

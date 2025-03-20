import CountUp from 'react-countup';
export const CountUps= () =>{
    return (
    <CountUp start={0} end={64000} delay={5} >
    {({ countUpRef }) => (
        <div>
          <span ref={countUpRef} />
        </div>
      )}
   </CountUp>
    )
}



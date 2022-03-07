import AppLayout from "@lib/components/Layouts/AppLayout";
import ReviewNumbers from "@components/Layouts/ReviewNumbers";
import Image from 'next/image';
import {number} from "prop-types";
import {PrismaAdapter} from "@next-auth/prisma-adapter";

const Page = () => {
  return (
    <>
      <AppLayout>
        <div className={'edit reviewBlock'}>
          <div className={'questionBox'}>
            <h1>Question</h1>
            <div>{'How much wood can a woodchuck chuck if a woodchuck could chuck wood?'}</div>
          </div>
          <div>
            <ReviewNumbers step={1} max={10} min={0} previousScore={5}/>
          </div>
          <div className={'responseBox'}>
            <h1>Reasoning for response:</h1>
            <div>
              <textarea id='questionResponse' defaultValue={'some test value'}/>
            </div>
          </div>
          <button>Previous</button>
          Question {'1'} of {'10'}
          <button onClick={() => {
            let data = {score: -1, questionResponse:''};
            Array.from(document.getElementsByClassName("current-score")).forEach(function (element) {
              data.score = parseInt(element.innerHTML);
            });
            data.questionResponse = document.getElementById("questionResponse").textContent;
            console.log(data);
          }}>Next
          </button>
        </div>
        <div>
          Other shit
        </div>
      </AppLayout>
    </>
  );
};

export default Page;

import Heading from "../commons/Heading";

export default function About() {
  return (
    <div className="mx-auto my-4">
      <Heading title="ABOUT ME" />
      {/* flex items-stretch justify-center */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2">
        <div className="text-xl text-dark-grey order-2 md:order-1">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            temporibus voluptas aut doloremque, autem sunt vero cupiditate
            nesciunt voluptatem veritatis ex beatae quisquam, harum nostrum quis
            officia ad eos quidem provident amet consequuntur repellendus quo
            laborum? Quis nemo, modi adipisci officiis nihil labore quam nostrum
            eveniet voluptas quo a odit aperiam praesentium fuga, illum commodi
            id soluta.
          </p>
          <p>
            amet minus perspiciatis neque voluptatem, pariatur necessitatibus
            rerum? Illum sequi eaque rem ex ipsum voluptate hic nostrum
            perferendis soluta, maiores ut asperiores vitae a alias. Inventore
            delectus in exercitationem non minima distinctio asperiores! Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quod
            autem odit cum? Fugiat obcaecati nesciunt error ex consequuntur
            commodi ipsum non dolorum nemo, eos sapiente minus rerum harum
            quaerat quia facilis qui quibusdam deleniti maxime consectetur
            cupiditate asperiores ullam.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img src="/images/developer.png" alt="developer" className="w-5/6 mx-auto" />
        </div>
      </div>
    </div>
  );
}

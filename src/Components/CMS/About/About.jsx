import CountUp from "react-countup";
import PageHeader from "../PageHeader/PageHeader";
import { about, feature } from "../../../assets/images";

const About = () => {
  const pageTitle = "About";
  const breadcrumbLinks = [
    { label: "Home", url: "/" },
    { label: "About", url: "/about" },
  ];
  return (
    <div>
      <>
        <PageHeader pageTitle={pageTitle} breadcrumbLinks={breadcrumbLinks} />
        {/* About Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src={about}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="section-title position-relative mb-4">
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                    About Us
                  </h6>
                  <h1 className="display-4">
                    First Choice For Online Education Anywhere
                  </h1>
                </div>
                <p>
                  Tempor erat elitr at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                  Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                  ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                  clita duo justo et tempor consetetur takimata eirmod, dolores
                  takimata consetetur invidunt magna dolores aliquyam dolores
                  dolore. Amet erat amet et magna
                </p>
                <div className="row pt-3 mx-0">
                  <div className="col-3 px-0">
                    <div className="bg-success text-center p-4">
                      <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={123} duration={2} />
                      </h1>
                      <h6 className="text-uppercase text-white">
                        Available<span className="d-block">Subjects</span>
                      </h6>
                    </div>
                  </div>
                  <div className="col-3 px-0">
                    <div className="bg-primary text-center p-4">
                      <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={1234} duration={2} />
                      </h1>
                      <h6 className="text-uppercase text-white">
                        Online<span className="d-block">Courses</span>
                      </h6>
                    </div>
                  </div>
                  <div className="col-3 px-0">
                    <div className="bg-secondary text-center p-4">
                      <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={123} duration={2} />
                      </h1>
                      <h6 className="text-uppercase text-white">
                        Skilled<span className="d-block">Instructors</span>
                      </h6>
                    </div>
                  </div>
                  <div className="col-3 px-0">
                    <div className="bg-warning text-center p-4">
                      <h1 className="text-white" data-toggle="counter-up">
                      <CountUp end={1234} duration={2} />
                      </h1>
                      <h6 className="text-uppercase text-white">
                        Happy<span className="d-block">Students</span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Feature Start */}
        <div className="container-fluid py-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <div className="section-title position-relative mb-4">
                  <h6 className="d-inline-block position-relative text-secondary text-uppercase pb-2">
                    Why Choose Us?
                  </h6>
                  <h1 className="display-4">
                    Why You Should Start Learning with Us?
                  </h1>
                </div>
                <p className="mb-4 pb-2">
                  Aliquyam accusam clita nonumy ipsum sit sea clita ipsum clita,
                  ipsum dolores amet voluptua duo dolores et sit ipsum rebum,
                  sadipscing et erat eirmod diam kasd labore clita est. Diam
                  sanctus gubergren sit rebum clita amet.
                </p>
                <div className="d-flex mb-3">
                  <div className="btn-icon bg-primary mr-4">
                    <i className="fa fa-2x fa-graduation-cap text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Skilled Instructors</h4>
                    <p>
                      Labore rebum duo est Sit dolore eos sit tempor eos stet,
                      vero vero clita magna kasd no nonumy et eos dolor magna
                      ipsum.
                    </p>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <div className="btn-icon bg-secondary mr-4">
                    <i className="fa fa-2x fa-certificate text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>International Certificate</h4>
                    <p>
                      Labore rebum duo est Sit dolore eos sit tempor eos stet,
                      vero vero clita magna kasd no nonumy et eos dolor magna
                      ipsum.
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="btn-icon bg-warning mr-4">
                    <i className="fa fa-2x fa-book-reader text-white" />
                  </div>
                  <div className="mt-n1">
                    <h4>Online Classes</h4>
                    <p className="m-0">
                      Labore rebum duo est Sit dolore eos sit tempor eos stet,
                      vero vero clita magna kasd no nonumy et eos dolor magna
                      ipsum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100"
                    src={feature}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature Start */}
      </>
    </div>
  );
};
export default About;

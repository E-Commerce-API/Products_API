
# System Design Capstone

The goal was to replace an existing API with a back end system that can support the full data set for
an E-commerce site that can scale to meet the demands of production traffic.

## Tech Stack

**Server:** [Node](https://nodejs.org/en/), [Express](https://expressjs.com/)

**Database:** [MongoDB](https://www.mongodb.com/), [Mongoose](https://mongoosejs.com/)

**Production Deployment:** 3x AWS EC2 (t2.micro) instances - 20.04 Ubuntu - 8GB SSD

**Development Stress Testing:** [artillery.io](https://artillery.io/), [New Relic](https://newrelic.com/)

**Production Stress Testing:** [loader.io](https://loader.io/)

## Optimizations

Implemented MongoDB [pipeline aggregation](https://docs.mongodb.com/manual/core/aggregation-pipeline/) consolidating collections to a single collection reducing complicated queries.

Utilized AWS load balancer to increase traffic up to 1600 requests per second while maintaining over 99% success rate.

## Testing Results

![Imgur](https://i.imgur.com/23QHyHP.png)

![Imgur](https://i.imgur.com/BC7kKSt.png)

## Author

- [Scott Provence](https://github.com/scopro220/)


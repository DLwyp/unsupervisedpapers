---
{
  "title": "Large-scale deep unsupervised learning using graphics processors",
  "date": "2009-06-14",
  "authors": [
    "R. Raina",
    "A. Madhavan",
    "A. Ng"
  ],
  "abstract": "The promise of unsupervised learning methods lies in their potential to use vast amounts of unlabeled data to learn complex, highly nonlinear models with millions of free parameters. We consider two well-known unsupervised learning models, deep belief networks (DBNs) and sparse coding, that have recently been applied to a flurry of machine learning applications (Hinton & Salakhutdinov, 2006; Raina et al., 2007). Unfortunately, current learning algorithms for both models are too slow for large-scale applications, forcing researchers to focus on smaller-scale models, or to use fewer training examples.\n In this paper, we suggest massively parallel methods to help resolve these problems. We argue that modern graphics processors far surpass the computational capabilities of multicore CPUs, and have the potential to revolutionize the applicability of deep unsupervised learning methods. We develop general principles for massively parallelizing unsupervised learning tasks using graphics processors. We show that these principles can be applied to successfully scaling up learning algorithms for both DBNs and sparse coding. Our implementation of DBN learning is up to 70 times faster than a dual-core CPU implementation for large models. For example, we are able to reduce the time required to learn a four-layer DBN with 100 million free parameters from several weeks to around a single day. For sparse coding, we develop a simple, inherently parallel algorithm, that leads to a 5 to 15-fold speedup over previous methods.",
  "links": [
    {
      "resource": "PDF",
      "icon": "pdf",
      "url": "http://dl.acm.org/citation.cfm?id=1553486"
    },
    {
      "resource": "Semantic Scholar",
      "icon": "semanticscholar",
      "url": "https://www.semanticscholar.org/paper/e337c5e4c23999c36f64bcb33ebe6b284e1bcbf1"
    }
  ],
  "supervision": [],
  "tasks": [],
  "methods": [],
  "thumbnail": "large-scale-deep-unsupervised-learning-using-graphics-processors-thumb.jpg",
  "card": "large-scale-deep-unsupervised-learning-using-graphics-processors-card.jpg",
  "s2_paper_id": "e337c5e4c23999c36f64bcb33ebe6b284e1bcbf1"
}
---


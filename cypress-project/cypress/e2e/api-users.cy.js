describe('API - GitHub public endpoint', () => {
  it('returns rate limit metadata (contract check)', () => {
    cy.request({
      method: 'GET',
      url: 'https://api.github.com/rate_limit',
      headers: { 'User-Agent': 'automation-architecture-lab' }
    }).then((res) => {
      expect(res.status).to.eq(200)

      // Basic contract assertions (tolerant to additive fields)
      expect(res.body).to.have.property('resources')
      expect(res.body.resources).to.have.property('core')
      expect(res.body.resources.core).to.include.keys('limit', 'remaining', 'reset')

      expect(res.body.resources.core.limit).to.be.a('number')
      expect(res.body.resources.core.remaining).to.be.a('number')
      expect(res.body.resources.core.reset).to.be.a('number')
    })
  })
})

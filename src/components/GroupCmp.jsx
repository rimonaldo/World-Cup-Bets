import React from 'react'
import useStore from '../store/useStore'

export default function Group() {
   const teams = useStore(state => state.teams)

   function sortByGroup() {
      const B = { name: 'B', gTeams: [...teams.filter(t => t.groups === 'B')] }
      const A = { name: 'A', gTeams: [...teams.filter(t => t.groups === 'A')] }
      const C = { name: 'C', gTeams: [...teams.filter(t => t.groups === 'C')] }
      const D = { name: 'D', gTeams: [...teams.filter(t => t.groups === 'D')] }
      const E = { name: 'E', gTeams: [...teams.filter(t => t.groups === 'E')] }
      const F = { name: 'F', gTeams: [...teams.filter(t => t.groups === 'F')] }
      const G = { name: 'G', gTeams: [...teams.filter(t => t.groups === 'G')] }
      const H = { name: 'H', gTeams: [...teams.filter(t => t.groups === 'H')] }

      const groups = [A, B, C, D, E, F, G, H]
      return groups
   }

   return (
      <>
         {sortByGroup().map(group => {
            return (
               <table className="table group">
                  <caption>{group.name}</caption>
                  <tr>
                     <th>P</th>
                     <th>Team</th>
                     <th>PTS</th>
                     <th>W</th>
                     <th>D</th>
                     <th>L</th>
                     <th>GP</th>
                     <th>GD</th>
                  </tr>
                  {teams.length ? (
                     group.gTeams.map((team, idx) => {
                        return (
                           <>
                              <tr key={team._id}>
                                 <td>{idx + 1}</td>
                                 <td className='team' >{team.name_en}</td>
                                 <td>0</td>
                                 <td>0</td>
                                 <td>0</td>
                                 <td>0</td>
                                 <td>0</td>
                                 <td>0</td>
                              </tr>
                           </>
                        )
                     })
                  ) : (
                     <div> ''</div>
                  )}
               </table>
            )
         })}
      </>
      // <table className="table">

      //    <thead>
      //       <tr>
      //          <th class="table-column--sub">
      //             <abbr title="Position">P</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Team">Team</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Games played">GP</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Won">W</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Drawn">D</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Lost">L</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Goals for">F</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Goals against">A</abbr>
      //          </th>
      //          <th class="table-column--importance-3">
      //             <abbr title="Goal difference">GD</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Points">Pts</abbr>
      //          </th>
      //          <th>
      //             <abbr title="Results of previous games">Form</abbr>
      //          </th>
      //       </tr>
      //    </thead>

      //    <tbody>
      //       <tr class="">
      //          <td class="table-column--sub">1</td>
      //          <td class="table-column--main">
      //             <span class="team-name" data-abbr="ARS">
      //                {/* <img class="team-crest" alt="" src="https://sport.guim.co.uk/football/crests/60/1006.png"> */}

      //                <a
      //                   href="https://www.theguardian.com/football/arsenal"
      //                   data-link-name="View team"
      //                   class="team-name__long"
      //                >
      //                   Arsenal
      //                </a>
      //             </span>
      //          </td>
      //          <td>11</td>
      //          <td class="table-column--importance-1">9</td>
      //          <td class="table-column--importance-1">1</td>
      //          <td class="table-column--importance-1">1</td>
      //          <td class="table-column--importance-1">25</td>
      //          <td class="table-column--importance-1">11</td>
      //          <td class="table-column--importance-3">14</td>
      //          <td>
      //             <b>28</b>
      //          </td>
      //       </tr>
      //    </tbody>

      //    <tfoot class="table__caption table__caption--bottom">
      //       <tr>
      //          <td colspan="11">
      //             <a
      //                href="https://www.theguardian.com/football/premierleague/table"
      //                data-link-name="full table"
      //                class="full-table-link"
      //             >
      //                View full <span class="competition-name">Premier League</span> table
      //             </a>
      //          </td>
      //       </tr>
      //    </tfoot>
      // </table>
   )
}

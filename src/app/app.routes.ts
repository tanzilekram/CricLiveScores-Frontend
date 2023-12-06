import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { AllMatchesComponent } from './pages/all-matches/all-matches.component';
import { PointTableComponent } from './pages/point-table/point-table.component';

export const routes: Routes = [
    {
        path: "home",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "live-score",
        component: LiveScoreComponent,
        title: "Live Matches"
    },
    {
        path: "all-matches",
        component: AllMatchesComponent,
        title: "All Matches"
    },
    {
        path: "point-table",
        component: PointTableComponent,
        title: "Points Table"
    },
];
